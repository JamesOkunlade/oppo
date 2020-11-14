import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import {
  save
} from "../../actions";

const OpportunityCard = ({ id, objective, type, save }) => {
  return (
    <section className="card">
          <div>
            <p>{id}</p>
            <Link to={`/opportunity/${id}`}><h3>{objective}</h3></Link>
            <p>{type}</p>
          </div>
          <div>
            <button className="btn add-btn" onClick={() => save()}>Add</button>
          </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;

  return {
    save: () => dispatch(save(id)),
  }
};

export default connect(null, mapDispatchToProps)(OpportunityCard);




