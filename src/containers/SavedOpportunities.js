import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { fetchSavedOpportunities } from "../actions";
import Header from "../components/header/Header"
import SavedOpportunityCard from "../components/savedOpportunityCard/SavedOpportunityCard"

const SavedOpportunities = (props) => {
  const { savedOpportunities = [], removing } = props.savedOpportunities;

  useEffect(() => {
    props.fetchSavedOpportunities();
  }, [removing]);

  return (
    <div>
        <section className=""> 
          <Header />
        </section>
        <section className="oppo_card"> 
          <article>
            {savedOpportunities.map((opportunity, index) => {
              return (
                <div>
                  <SavedOpportunityCard key={index} {...opportunity} />
                  <hr/>
                </div>
              ) ;
            })}
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

const mapDispatchToProps = dispatch => {
  return {
    fetchSavedOpportunities: () => dispatch(fetchSavedOpportunities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedOpportunities);








