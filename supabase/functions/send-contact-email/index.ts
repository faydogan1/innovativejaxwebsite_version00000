import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  projectType: string;
  hearAbout?: string;
  description: string;
  budget?: string;
  contactMethod: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form data:", formData);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.description) {
      console.error("Missing required fields in form data.");
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
New Contact Form Submission
============================

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Company: ${formData.company}
- Contact Method: ${formData.contactMethod}

Project Details:
- Project Type: ${formData.projectType}
- How they heard about us: ${formData.hearAbout || "Not specified"}
- Budget: ${formData.budget || "Not specified"}

Project Description:
${formData.description}

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
        subject: `New Contact Inquiry from ${formData.firstName} ${formData.lastName}`,
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
      JSON.stringify({ success: true, message: "Form submitted successfully", messageId: responseData.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Caught unexpected error in contact form function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
