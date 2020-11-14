import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import {
  remove,
} from "../../actions";

const SavedOpportunityCard = ({ id, objective, details, compensation, remove }) => {
  return (
    <section className="card">
          <div>
            <p>{id}</p>
            <Link to={`/opportunity/${id}`}><h3>{objective}</h3></Link>
            <p>{details}</p>
            <p>Compensation: {compensation} USD/hour</p>
          </div>
          <div>
            <button className="btn add-btn" onClick={() => remove()}>Remove</button>
          </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;

  return {
    remove: () => dispatch(remove(id)),
  }
};

export default connect(null, mapDispatchToProps)(SavedOpportunityCard);




