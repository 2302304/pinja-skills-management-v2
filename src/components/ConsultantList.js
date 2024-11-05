import React, { useState } from 'react';
import ConsultantCard from './ConsultantCard';
import SearchBar from './SearchBar';
import './ConsultantList.css';

const ConsultantList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const consultants = [
    { 
      id: 1, 
      name: 'John Doe', 
      expertise: 'Frontend Developer', 
      education: 'Bachelor\'s Degree in Computer Science', 
      graduationYear: 2018,
      certificates: ['React', 'JavaScript'],
      projectExperience: 'Web development, UI/UX design',
      experienceYears: 5
    },
    { 
      id: 2, 
      name: 'Kim Smith', 
      expertise: 'Backend Developer', 
      education: 'Master\'s Degree in Software Engineering', 
      graduationYear: 2016,
      certificates: ['Node.js', 'Python'],
      projectExperience: 'Backend systems, API development',
      experienceYears: 7
    },
    { 
      id: 3, 
      name: 'Mark Johnson', 
      expertise: 'Full Stack Developer', 
      education: 'Bachelor\'s Degree in Information Technology', 
      graduationYear: 2020,
      certificates: ['Full Stack Development', 'Cloud Services'],
      projectExperience: 'Full stack solutions, cloud deployment',
      experienceYears: 3
    }
  ];

  const filteredConsultants = consultants.filter((consultant) =>
    consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultant.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <div className="consultant-list">
        {filteredConsultants.map((consultant) => (
          <ConsultantCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
};

export default ConsultantList;
