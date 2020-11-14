import React from "react";

const OpportunityCard = ({ id, objective, type }) => {
  return (
    <section className="card">
            <h3>{objective}</h3>
            <p>{type}</p>
    </section>
  );
};

export default OpportunityCard;



