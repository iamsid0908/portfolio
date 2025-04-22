import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data/resumeData';
import {  Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
          My professional journey as a software engineer, working with various technologies and teams.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-4xl mx-auto"
      >
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:translate-x-px"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`mb-12 md:mb-0 relative ${
              index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto' : 'md:pl-10'
            } md:w-1/2 ${index !== experienceData.length - 1 ? 'pb-12' : ''}`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-0 ${
              index % 2 === 0 ? 'left-0 md:-left-3' : 'left-0 md:-left-3 md:translate-x-0'
            } md:translate-x-1/2 w-6 h-6 rounded-full border-4 border-primary-50 dark:border-gray-800 bg-primary-500 z-10`}></div>

            <div className="card overflow-hidden">
              {/* Company logo/image */}
              {exp.logo && (
                <div className="h-40 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <div className="flex items-center text-xs bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                    <Calendar size={14} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{exp.company}</p>
                
                <ul className="mb-4 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex">
                      <span className="mr-2 text-primary-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;