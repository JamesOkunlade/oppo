import React from "react";
import { Link } from 'react-router-dom';


const SavedOpportunityCard = ({ id, objective, type }) => {
  return (
    <section className="card">
          <div>
            <Link to={`/opportunity/${id}`}><h3>{objective}</h3></Link>
            <p>{type}</p>
          </div>
          <div>
            <button className="btn add-btn">Add</button>
          </div>
    </section>
  );
};

export default SavedOpportunityCard;



