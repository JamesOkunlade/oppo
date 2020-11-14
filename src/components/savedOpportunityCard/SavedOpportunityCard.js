import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import {
  remove,
} from "../../actions";

const SavedOpportunityCard = (props) => {
  const { id, objective, details, compensation } = props.opportunity
  return (
    <section className="card">
          <div>
            <Link to={`/opportunity/${id}`}><h3>{objective}</h3></Link>
            <p>{details}</p>
            <p>Compensation: {compensation} USD/hour</p>
          </div>
          <div>
            <button className="btn" onClick={() => props.remove(id)}>Remove</button>
          </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(remove(id)),
  }
};

export default connect(null, mapDispatchToProps)(SavedOpportunityCard);




