import { Code2, Database, Wrench } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  responsibilities: string[];
  tech: {
    frontend?: string;
    backend?: string;
    database?: string;
    tools?: string;
  };
}

const projects: Project[] = [
  {
    title: 'RFP CHATBOT',
    description:
      'Developed a web application to streamline the Request for Proposal (RFP) process for clients and IT companies. The application facilitates the submission and review of RFPs, covering various categories such as website redesign, cloud migration, and AI & ML solutions.',
    responsibilities: [
      'Collaborated with the AI team to integrate an automated solution generation tool',
      'Designed and implemented a user-friendly interface to enhance RFP submission process',
      'Developed a chatbot feature for user assistance and query handling',
    ],
    tech: {
      frontend: 'React JS, React-Bootstrap',
      backend: 'Python',
      database: 'MongoDB',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'CM CUP',
    description:
      'A comprehensive development initiative contributing to both backend and frontend aspects. The project focused on delivering a seamless and interactive user experience by leveraging modern technologies.',
    responsibilities: [
      'Designed and implemented RESTful APIs using Node.js',
      'Handled third-party integrations for seamless communication',
      'Developed interactive and responsive user interface using React.js',
    ],
    tech: {
      frontend: 'React JS, React-Bootstrap',
      backend: 'Node JS',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'HR PORTAL',
    description:
      'A dynamic initiative aimed at building a comprehensive platform that streamlines HR processes and enhances organizational efficiency. Features a Cybersecurity Module enabling employees to access educational resources and take tests.',
    responsibilities: [
      'Designed and implemented RESTful APIs using Node.js',
      'Developed interactive and responsive user interface using React.js',
      'Built Cybersecurity Module with educational resources and testing capabilities',
    ],
    tech: {
      frontend: 'React JS, React-Bootstrap',
      backend: 'Node JS',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'Oneness Yoga App',
    description:
      'A wellness-focused application designed to help users track and engage with yoga and meditation routines. Built scalable backend services and automated workflows to enhance user experience.',
    responsibilities: [
      'Developed and managed backend services using Node.js',
      'Implemented cron jobs for automating scheduled tasks',
      'Integrated Nodemailer for automated email notifications',
      'Enabled secure image uploads using AWS S3',
    ],
    tech: {
      backend: 'Node JS, Nodemailer',
      database: 'MySQL Workbench',
      tools: 'AWS S3, Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'Maganti Oil Project',
    description:
      'A comprehensive system developed to manage the logistics, inventory, and sales of Maganti Oil products, streamlining operations and improving data management for efficiency.',
    responsibilities: [
      'Developed WebSocket-based backend using Node.js',
      'Designed and implemented frontend using React.js',
      'Handled message delivery status, online indicators, and chat history',
    ],
    tech: {
      frontend: 'React JS',
      backend: 'Node JS, Express JS',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'StandOut',
    description:
      'This project is a comprehensive, responsive job portal application, designed to connect job seekers with employers efficiently.',
    responsibilities: [
      'Developed responsive frontend modules using Next.js and TypeScript',
      'Collaborated with backend team to integrate REST APIs built with Python',
      'Enhanced application workflows and UI components',
    ],
    tech: {
      frontend: 'Next JS, TypeScript',
      backend: 'Python',
      database: 'MongoDB',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h3>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                {project.tech.frontend && (
                  <div className="flex items-start gap-3">
                    <Code2 size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Frontend:</span>
                      <p className="text-sm text-gray-300">{project.tech.frontend}</p>
                    </div>
                  </div>
                )}

                {project.tech.backend && (
                  <div className="flex items-start gap-3">
                    <Database size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Backend:</span>
                      <p className="text-sm text-gray-300">{project.tech.backend}</p>
                    </div>
                  </div>
                )}

                {project.tech.database && (
                  <div className="flex items-start gap-3">
                    <Database size={18} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Database:</span>
                      <p className="text-sm text-gray-300">{project.tech.database}</p>
                    </div>
                  </div>
                )}

                {project.tech.tools && (
                  <div className="flex items-start gap-3">
                    <Wrench size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Tools:</span>
                      <p className="text-sm text-gray-300">{project.tech.tools}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
