import React from 'react';
import { personalInfo } from '../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">SC</div>
            <span className="mx-2 text-gray-400">|</span>
            <p className="text-gray-600 dark:text-gray-300">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;