import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'NSF Eager Project',
      description:
        'EAGER: Empowering African American STEM Talent: Enhancing Semiconductor and Microelectronics Expertise Through Targeted Research and Mentorship at an HBCU.',
      category: 'Evaluation',
      year: '2025',
      imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Research image
    },
    {
      title: 'NSF Automation Project',
      description:
        'Technician Training in AutomationTechnologies for Advanced Manufacturing.',
      category: 'Research',
      year: '2023',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Research image
    },
    {
      title: 'NSF Alternative Energy',
      description:
        'Alternative Energy .',
      category: 'Evaluation',
      year: '2024',
      imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Research image
    },
    {
      title: 'Thermal Device for Orthodontics',
      description:
        'Thermal Device of Orthodontics Light Curing, ALIGN Technology Medical Device Company Grant.',
      category: 'Research',
      year: '2022',
      imageUrl: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Research image
    },
    {
      title: 'Lab Development',
      description:
        'Development of Thermo-fluid System .',
      category: 'Lab Development',
      year: '2021',
      imageUrl: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Lab development image
    },
    {
      title: 'Flume Lab Development',
      description:
        'Development of Flume Tank System by using Florida EPIC grant.',
      category: 'Research',
      year: '2020',
      imageUrl: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Research image
    },
    {
      title: 'Development of a Control System',
      description:
        'Improvement Thermo-fluid Control System.',
      category: 'Market Research and Lab Development',
      year: '2019',
      imageUrl: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Control system image
    },
    {
      title: 'Curriculum Development',
      description:
        'Design-Integrated Engineering Curriculum Development of STEM Fluid Mechanics Course.',
      category: 'Education',
      year: '2018',
      imageUrl: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Education image
    },
    {
      title: 'Model Development',
      description:
        'Numerical Modeling of a Small Modular Reactor Safety System, Research and Economical Development.',
      category: 'Research',
      year: '2018',
      imageUrl: 'https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Model development image
    },
    {
      title: 'Curriculum Development',
      description:
        'Design-Integrated Engineering Curriculum Development of STEM Fluid Mechanics Course.',
      category: 'Education',
      year: '2019',
      imageUrl: 'https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Education image
    },
    {
      title: 'Mechanical Model Development',
      description:
        'Improvement of Heat Transfer Models for Nuclear Propulsion Rockets" granted by NASA (National Aeronautics and Space Administration) Idaho Space Grant Consortium, NASA Grant',
      category: 'Research',
      year: '2017',
      imageUrl: 'https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Mechanical model image
    },
    {
      title: 'Market Research',
      description:
        'Leveraged Cost of Electricity -LCOE- of NuScale Power Plants, 1st Phase, funded by NuScale and EPI.',
      category: 'Market Research',
      year: '2017',
      imageUrl: 'https://images.pexels.com/photos/3861966/pexels-photo-3861966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Market research image
    },    
    {
      title: 'Research',
      description:
        'Faculty Development Program," funded by US-NRC.',
      category: 'Market Research',
      year: '2018',
      imageUrl: 'https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Research image
    },
    {
      title: 'Market Research',
      description:
        'Economies  of  Small:  Design and  Efficiencies," funded by NuScale Company and Energy Policy Institute.',
      category: 'Market Research',
      year: '2015',
      imageUrl: 'https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Market research image
    },
    {
      title: 'Mechanical Model Development',
      description:
        'Improvement of Heat Transfer Models for Nuclear Propulsion Rockets" granted by NASA (National Aeronautics and Space Administration) Idaho Space Grant Consortium, NASA Grant',
      category: 'Research',
      year: '2016',
      imageUrl: 'https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Mechanical model image
    },
    
    {
      title: 'Software Development',
      description:
        'Coupling of RELAP/SCDAP and neutronic codes for Severe Accidents" funded by Innovative Systems Software Company .',
      category: 'Research',
      year: '2017',
      imageUrl: 'https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Software development image
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Project Topics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Selected Project Topics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Diverse projects across education, research, and business sectors
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              With more than 24 years of experience across diverse industries and environments, InnovativeJax experts brings the expertise to hit the ground running on every new project. We know no two challenges are the same, which is why we approach each opportunity with fresh perspective—delivering creative, customized solutions that fit your unique needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="h-48 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center space-x-2 transition-colors">
                   
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how our experience can benefit your next initiative.
          </p>
        </div>
      </section>
    </div>
  );
}
