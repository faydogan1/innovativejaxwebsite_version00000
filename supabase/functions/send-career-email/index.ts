import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface CareerFormData {
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  coverLetter: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: CareerFormData = await req.json();
    console.log("Received career form data:", formData);

    if (!formData.name || !formData.email || !formData.coverLetter) {
      console.error("Missing required fields in career form data.");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Retrieve RESEND_API_KEY from environment variables (Supabase Secrets)
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY present:", !!RESEND_API_KEY);

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in Supabase secrets. Please ensure it's configured.");
      return new Response(
        JSON.stringify({ error: "Server configuration error: Resend API key missing." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailBody = `
New Career Application
============================

Applicant Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- LinkedIn: ${formData.linkedin || "Not provided"}

Cover Letter:
${formData.coverLetter}

============================
Submitted at: ${new Date().toLocaleString()}
    `;

    console.log("Attempting to send email via Resend...");
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // IMPORTANT: Ensure this is a verified sender in your Resend account!
                                       // If not, Resend will reject the email.
        to: "info@innovativejax.com", // Recipient email address updated
        reply_to: formData.email,
        subject: `New Career Application from ${formData.name}`,
        html: `<pre>${emailBody}</pre>`,
      }),
    });

    const responseData = await emailResponse.json();
    console.log("Resend API response status:", emailResponse.status);
    console.log("Resend API response data:", responseData);

    if (!emailResponse.ok) {
      console.error("Resend API error: Email sending failed.", responseData);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: responseData }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Email sent successfully via Resend.");
    return new Response(
      JSON.stringify({ success: true, message: "Application submitted successfully", messageId: responseData.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Caught unexpected error in career form function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
