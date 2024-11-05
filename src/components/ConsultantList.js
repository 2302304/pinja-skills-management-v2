import React from 'react';
import ConsultantCard from './ConsultantCard';
import './ConsultantList.css';

const ConsultantList = () => {
  const consultants = [
    { id: 1, name: 'John Doe', expertise: 'Frontend Developer' },
    { id: 2, name: 'Jane Smith', expertise: 'Backend Developer' },
  ];

  return (
    <div className="consultant-list">
      {consultants.map(consultant => (
        <ConsultantCard key={consultant.id} consultant={consultant} />
      ))}
    </div>
  );
};

export default ConsultantList;
