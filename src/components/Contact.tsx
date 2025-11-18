import { Mail, Linkedin, GraduationCap, Phone } from 'lucide-react';

function Contact() {
  const education = [
    { year: '2010 - 2013', institution: 'MC High School', degree: 'Board of SSC Education', score: '4.8' },
    { year: '2013 - 2015', institution: 'P.N.R.E.S College', degree: 'Board of Intermediate Education', score: '7.9' },
    { year: '2015 - 2018', institution: 'MNM Degree College', degree: 'Bachelor of Technology', score: '7.0' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education & Contact
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-cyan-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 text-sm mb-2">{edu.year}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
                  <p className="text-gray-400 text-sm mb-2">{edu.degree}</p>
                  <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
                    Score: {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-8">
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and collaborations.
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:surendrakandula79@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white">surendrakandula79@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/surendra-kandula-a63881309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-white">surendra-kandula-a63881309</div>
                  </div>
                </a>

                <a
                  href="tel:+919553830545"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white">+91 9553830545</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Surendra Reddy Kandula. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
