import React from 'react';
import './ConsultantCard.css';

const ConsultantCard = ({ consultant }) => {
  return (
    <div className="consultant-card">
      <h3>{consultant.name}</h3>
      <p>Erikoisala: {consultant.expertise}</p>
    </div>
  );
};

export default ConsultantCard;
