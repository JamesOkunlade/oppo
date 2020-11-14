import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { fetchSavedOpportunities } from "../actions";
import Header from "../components/header/Header"
import SavedOpportunityCard from "../components/savedOpportunityCard/SavedOpportunityCard"

const SavedOpportunities = ({ savedOpportunities, dispatch}) => {
  const savedOpportunitiesList = savedOpportunities.savedOpportunities
  .map((opportunity) =>  (<SavedOpportunityCard key={opportunity.id} opportunity={opportunity} />))
  
  useEffect(() => {
    dispatch(fetchSavedOpportunities())
  }, [savedOpportunities.removing, dispatch]);

  return (
    <div>
        <section className=""> 
          <Header />
        </section>
        <section className="oppo_card"> 
          <article>
            { savedOpportunitiesList }
          </article>
        </section>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    savedOpportunities: state.savedOpportunities
  };
};

export default connect(mapStateToProps)(SavedOpportunities);








