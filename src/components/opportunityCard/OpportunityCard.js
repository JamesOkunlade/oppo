import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import {
  save
} from "../../actions";

const OpportunityCard = (props) => {
  const { id, objective, type } = props.opportunity
  return (
    <section className="card">
          <div>
            <Link to={`/opportunity/${id}`}><h3>{objective}</h3></Link>
            <p>{type}</p>
          </div>
          <div>
            <button className="btn" onClick={() => props.save(id)}>Add</button>
          </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    save: (id) => dispatch(save(id)),
  }
};

export default connect(null, mapDispatchToProps)(OpportunityCard);




