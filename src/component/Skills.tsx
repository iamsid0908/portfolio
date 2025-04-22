import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/resumeData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: `${i}%`,
      transition: { duration: 1, ease: 'easeInOut' },
    }),
  };

  const programmingLanguages = skillsData.filter(skill => skill.category === 'languages');
  const frameworks = skillsData.filter(skill => skill.category === 'frameworks');
  const tools = skillsData.filter(skill => skill.category === 'tools');

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
          My professional skillset and technologies I've worked with.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Programming Languages
              <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500"></span>
            </h3>
            {programmingLanguages.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    custom={skill.level}
                    variants={barVariants}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Frameworks & Technologies
              <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500"></span>
            </h3>
            {frameworks.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    custom={skill.level}
                    variants={barVariants}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={itemVariants} className="mt-10">
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Tools & Other Skills
            <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500"></span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center">
                  <span className="mr-2 inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;