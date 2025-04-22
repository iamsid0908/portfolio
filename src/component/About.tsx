import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { educationData, personalInfo } from '../data/resumeData';
import { GraduationCap, MapPin, Calendar,Mail } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with experience in full-stack development. My journey in 
              tech started during my academic years, where I developed a strong foundation in computer science
              fundamentals. Since then, I've been on a continuous learning path, expanding my skills and knowledge.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My approach to problem-solving involves a combination of analytical thinking and creativity. 
              I enjoy working on challenging projects and collaborating with teams to deliver high-quality solutions
              that meet business needs and provide excellent user experiences.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <MapPin size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
              <span>Based in {personalInfo.location}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Education
              <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500"></span>
            </h3>

            {educationData.map((edu, index) => (
              <div key={index} className="card p-6 mb-4">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary-50 dark:bg-gray-700 rounded-lg mr-4">
                    <GraduationCap className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{edu.period}</span>
                  <span className="mx-2">•</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
                
                <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Relevant Coursework:
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span 
                      key={idx}
                      className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;