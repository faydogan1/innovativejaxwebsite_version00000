import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) { 
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Independent External Evaluation',
      description:
        'We offer a complete suite of evaluation services—formative, front-end, summative, and external—ensuring impartial, independent insight for projects of any scale.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Research',
      description:
        'We have extensive experience designing and conducting research on engineering, AI, IT and educational learning processes and outcomes, including quasi-experimental studies and randomized controlled trials.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Consulting and Technology Support',
      description:
        'We offer expertise across diverse areas, from technology integration in schools to organizational planning and development, as well as strategies for scaling effective interventions.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Market Research & General Research Services',
      description:
        'We help businesses test existing products and services for new offerings.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'AI Services',
      description:
        'We develop customized AI software to solve their time-consuming or complex problems.',
    },
      {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Develop Labs',
      description:
        'We design and construct labs for your specific needs.',
    },
  ];

  const projects = [
    {
      imageUrl: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Enhancing Semiconductor and Microelectronics Expertise',
      description:
        'We offer comprehensive external evaluation services addressing how educational institutions across multiple districts implement and integrate technology.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Training in Automation Technologies',
      description:
        'We offer high-quality services for training in automation technologies.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Thermal Device for Orthodontics Light Curing',
      description:
        'We and a private university worked on a research project that was supported by a leading company for Orhodontics.',
    },
  ]; 

  return (
    <div className="pt-20">
      <section className="relative py-24 text-white">
        <img
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Innovative Education Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Innovative Education Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering Innovation in Education Through Grants, Research, and Technology Support
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-12 text-center border border-blue-100">
            <blockquote className="text-2xl text-gray-700 mb-6 italic">
              "Innovative Jax's proficiency in securing funding and providing insightful evaluations has significantly enhanced the impact and sustainability of numerous educational projects.”"
            </blockquote>
            <p className="text-gray-600 font-medium">
              – Professor, Leading University Partner
            </p>
            <button
              onClick={() => onNavigate('clients')}
              className="mt-8 text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center space-x-2"
            >
              <span>Learn more about our clients</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">
              Explore our latest work and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center space-x-2">
                    
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
