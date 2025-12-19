import { CheckCircle, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'External Evaluation',
      description:
        'We offer comprehensive external evaluations, formative and front-end evaluations, as well as summative evaluations for a wide range of proposals and projects, from an independent perspective.',
      features: [
        'Formative and front-end evaluations',
        'Summative program evaluations',
        'Independent perspective and analysis',
        'Comprehensive reporting and recommendations',
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Research',
      description:
        'We have extensive experience designing and conducting research on engineering, AI, IT and educational learning processes and outcomes, including quasi-experimental studies and randomized controlled trials.',
      features: [
        'Quasi-experimental study design',
        'Randomized controlled trials',
        'Learning outcomes assessment',
        'Statistical analysis and interpretation',
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Consulting and Technology Support',
      description:
        'We offer expertise across diverse areas, from technology integration in schools to organizational planning and development, as well as strategies for scaling effective interventions.',
      features: [
        'Technology integration consulting',
        'Organizational planning and development',
        'Scaling interventions effectively',
        'Internal evaluation buildings for potentional technology updates',
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Market Research & General Research Services',
      description:
        'We help businesses test existing products and services for new offerings.',
      features: [
        'Product and service testing',
        'Market analysis and insights',
        'User experience research',
        'Competitive landscape assessment',
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'AI Services',
      description:
        'We develop customized AI software to solve their time-consuming or complex problems.',
      features: [
        'We analyze your products and services to integrate AI modules',
        'SWOT analyses before AI module developments for your institutions and projects',
        'Competitive landscape assessment before AI module development',
      ],
    },
      {
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Develop Labs',
      description:
        'We design and construct labs for your specific needs.',
      features: [
        'Product and service comparisons for your labs',
        'Market analysis and insights for efficient labs',
        'User friendly environments for labs',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tailored research and evaluation solutions for your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you need an evaluation partner that can conduct complex, multi-year
              studies with rigorous statistical analyses, an impact study to show funders,
              or timely feedback to inform development on an innovative product or program,
              we will work closely with you – using the right mix of qualitative and
              quantitative methods – to understand and meet the needs of your project. Send
              us a quick email to describe your particular problem, or browse our service
              categories below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 bg-white rounded-2xl shadow-lg p-8 lg:p-12 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-md"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3 text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you achieve your research and evaluation goals.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
