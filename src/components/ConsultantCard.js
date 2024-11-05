import React from 'react';
import './ConsultantCard.css';

const ConsultantCard = ({ consultant }) => {
  return (
    <div className="consultant-card">
      <h3>{consultant.name}</h3>
      <p><strong>Erikoisala:</strong> {consultant.expertise}</p>
      <p><strong>Koulutus:</strong> {consultant.education} ({consultant.graduationYear})</p>
      <p><strong>Sertifikaatit:</strong> {consultant.certificates.join(', ')}</p>
      <p><strong>Projektikokemus:</strong> {consultant.projectExperience}</p>
      <p><strong>Kokemusvuodet:</strong> {consultant.experienceYears} vuotta</p>
    </div>
  );
};

export default ConsultantCard;
