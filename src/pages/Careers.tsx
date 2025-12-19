import { useState } from 'react';
import { Briefcase, Users, Heart, TrendingUp, Upload } from 'lucide-react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      // Removed anonKey and Authorization header as the Edge Function is publicly accessible for this purpose
      // and does not require client-side authentication.

      const response = await fetch(
        `${supabaseUrl}/functions/v1/send-career-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your submission! We\'ll review your information and be in touch if there\'s a good match.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          linkedin: '',
          coverLetter: '',
        });

        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Failed to submit career application:', response.status, errorData);
        setSubmitStatus('error');
        setSubmitMessage(`Failed to submit application. Please try again. Check the browser console for more details.`);
      }
    } catch (error) {
      console.error('Error submitting career application:', error);
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again. Check the browser console for more details.');
    }
  };

  const benefits = [
    {
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Collaborative Culture',
      description: 'Work with a talented team of researchers and evaluators',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Meaningful Work',
      description: 'Make a real impact on education and business outcomes',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Flexible Environment',
      description: 'Work-life balance and remote work options',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <img
          src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Job Openings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Job Openings</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our team of dedicated researchers and evaluators
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Thank you for your interest in InnovativeJax.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center mb-16 relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Current Openings"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <Briefcase className="w-16 h-16 text-blue-800 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At this time there are no job openings available.
              </p>
              <p className="text-gray-600">
                However, we're always interested in connecting with talented professionals.
                Please submit your information below to join our talent pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Join a team that values excellence, collaboration, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 flex flex-col items-center"
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md">
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Talent Pool
            </h2>
            <p className="text-lg text-gray-600">
              Interested in future opportunities? Submit your information and we'll keep
              you in mind for upcoming positions.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <p className="text-green-800 text-center font-medium">
                {submitMessage}
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800 text-center font-medium">
                {submitMessage}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile (optional)
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter *
              </label>
              <textarea
                required
                value={formData.coverLetter}
                onChange={(e) =>
                  setFormData({ ...formData, coverLetter: e.target.value })
                }
                rows={6}
                placeholder="Tell us about your background, interests, and why you'd like to work with InnovativeJax..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
