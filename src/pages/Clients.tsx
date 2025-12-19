import { Building2 } from 'lucide-react';

export default function Clients() {
  const clients = [
    'Florida A&M University',
    'Jacksonville University',
    'National Science Foundation',
    'University of Idaho',
    'Idaho State University',
    'ISS Company',
    'US NRC',
    'NASA',
    'Energy Policy Institure (EPI)',
    'International Atomic Energy Agency (IAEA)',
    'NuScale LLC',
    'Florida State - Excellence in Progress and Innovation through Collaboration (EPIC)',
    'Jacksonville University',
    'Westinghouse Electric Co.',
    'Penn State University',
  ];

  const testimonials = [
    {
      quote:
        'InnovativeJax delivered exceptional research that exceeded our expectations. Their methodology and clear communication made the entire process seamless. InnovativeJax delivered research that made the evaluations very clear for NSF, combining rigorous methodology with clear, consistent communication. The result was a smooth, highly professional experience that showcased their excellence and reliability.',
      author: 'Program Director',
      company: 'National Science Foundation',
      avatarUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      quote:
        'InnovativeJax’s evaluation services were key to securing continued funding for our programs. Their insights were both actionable and highly impactful, helping us achieve real results.',
      author: 'Professor',
      company: 'A State University',
      avatarUrl: 'https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      quote:
        'Partnering with InnovativeJax revolutionized our approach to product development. Their in-depth market research gave us the confidence to successfully launch our new platform for the market.',
      author: 'CEO',
      company: 'A Leading Company in US',
      avatarUrl: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <img
          src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Our Clients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted by leading organizations across education and business
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              We serve clients in both the public and private sector, including schools,
              universities, government agencies, museums, game developers, and principal
              investigators. We understand that different contexts call for different
              approaches. A brief list of selected organizations that we worked with includes:
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center group border border-gray-100"
              >
                <div>
                  <Building2 className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors mx-auto mb-3" />
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors font-medium">
                    {client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from organizations we've had the privilege to work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                />
                <blockquote className="text-gray-700 mb-6 italic text-justify">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-blue-200 pt-4 w-full">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Client Base
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience the difference that rigorous research and evaluation can make for
            your organization.
          </p>
        </div>
      </section>
    </div>
  );
}
