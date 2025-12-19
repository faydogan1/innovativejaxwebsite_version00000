import { Target, Heart, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared goals',
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: 'Diversity',
      description: 'Embracing diverse perspectives and approaches',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: 'Creativity',
      description: 'Innovative solutions to complex challenges',
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Continuous Learning',
      description: 'Committed to growth and improvement',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Our Mission"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering education and business through research and our innovative solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-justify">
              
We are dedicated to revolutionizing education by fostering a dynamic learning environment that inspires curiosity, creativity, and critical thinking. Our mission is to provide accessible, innovative, and personalized educational solutions that equip learners with the knowledge, skills, and confidence they need to excel in a rapidly evolving world.
              
Through cutting-edge technology, expertly curated content, and a global community of passionate educators, we strive to break down barriers to education, ensuring that every learner, regardless of background or circumstance, can unleash their full potential. We believe in nurturing a love for lifelong learning, preparing individuals not just for today's challenges, but for the challenges of tomorrow.

Guided by integrity, empathy, and a commitment to excellence, InnovativeJAX is dedicated to transforming education into a force for positive change in the lives of individuals, communities, and societies worldwide.
              
 We work with a diverse range of clients including schools, universities, government agencies, museums, game developers, and businesses across multiple sectors. Our approach combines rigorous methodology with practical application, ensuring that our research translates into real-world impact.
             
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <div className="max-w-4xl mx-auto">
                 <p className="text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                   
At InnovativeJAX, we envision a future where education transcends boundaries, empowering individuals to become lifelong learners and catalysts for positive change. We aspire to create a global learning ecosystem that adapts to the unique needs and aspirations of every learner, nurturing a culture of curiosity, resilience, and innovation.

Through state-of-the-art technology, personalized learning pathways, and a diverse community of educators and mentors, we aim to redefine the possibilities of education. Our vision is to foster an environment where creativity flourishes, critical thinking thrives, and individuals develop the skills and knowledge to navigate an ever-evolving world.

We see education as a powerful force for equity and inclusion, breaking down barriers and providing equal opportunities for all. By championing diversity of thought and experience, we strive to shape a future where individuals from every corner of the globe can contribute meaningfully to a more interconnected, harmonious world.

With a relentless pursuit of excellence, integrity, and a deep commitment to the transformative power of education, InnovativeJAX is dedicated to realizing a vision where learning knows no bounds, and the potential of every individual is fully realized.
                  
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                Our team is made up of experienced educators who are passionate about supporting educational institutions. 
We are committed to providing personalized and engaging educational services that meet the unique needs of each student.
Our seasoned experts are dedicated to revolutionizing education by providing tailored strategies and innovative solutions. 
With a deep understanding of diverse learning needs, we guide institutions, educators, and students towards sustainable success. 

Join us in shaping a brighter educational landscape. 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-justify">
Every project has its own story. We start by listening, then design a custom research plan that blends qualitative and quantitative methods to uncover the insights that matter most.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
From in-depth analytics to rapid feedback, we bring fresh insight and trusted expertise to help your project succeed.               
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
