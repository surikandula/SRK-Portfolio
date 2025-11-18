import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

          <div className="ml-20 space-y-12">
            <div className="relative">
              <div className="absolute -left-[3.25rem] top-6 w-6 h-6 rounded-full bg-cyan-500 border-4 border-black" />

              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Jr. Application Developer</h3>
                    <p className="text-xl text-gray-300 flex items-center gap-2">
                      <Briefcase size={20} />
                      MAGANTI IT SOLUTIONS PRIVATE LIMITED
                    </p>
                    <p className="text-gray-400 mt-1">Vijayawada, India</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={20} />
                    <span>Nov 2023 - Present</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Proficient Full Stack Web Developer with 2 years of experience. Skilled in front-end
                  technologies including HTML, CSS, and Bootstrap for building responsive and visually
                  appealing web interfaces. Experienced in JavaScript for implementing dynamic and
                  interactive features on web applications. Proficient in React.js for building
                  efficient and scalable user interfaces. Knowledgeable in back-end development using
                  Node.js for server-side programming and building RESTful APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
