import { Code, Server, Database as DatabaseIcon, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React JS', 'Next JS', 'Bootstrap', 'Tailwind CSS'],
    color: 'cyan',
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node JS', 'Java', 'Python', 'REST APIs', 'WebSockets', 'Sequelize'],
    color: 'blue',
  },
  {
    title: 'Database',
    icon: <DatabaseIcon size={24} />,
    skills: ['MySQL', 'MongoDB', 'MySQL Workbench'],
    color: 'purple',
  },
  {
    title: 'Tools & VCS',
    icon: <Wrench size={24} />,
    skills: ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'AWS S3', 'Nodemailer'],
    color: 'green',
  },
];

const softSkills = [
  'Good communication and interpersonal skills',
  'Teamwork',
  'Time Management',
  'Willingness to learn new things',
  'Quick learner',
  'Comfortable working independently and in teams',
];

function Skills() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20',
      blue: 'border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20',
      purple: 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20',
      green: 'border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/20',
    };
    return colors[color];
  };

  const getIconColorClass = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 border rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${getColorClasses(
                category.color
              )}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={getIconColorClass(category.color)}>{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Professional Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">▹</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
