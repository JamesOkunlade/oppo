import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchOpportunities } from "../actions";
import Header from "../components/header/Header"
import OpportunityCard from "../components/opportunityCard/OpportunityCard"


class Opportunities extends Component {
  componentDidMount() {
    this.props.fetchOpportunities();
  }

  render() {    
    const { opportunities = [] } = this.props.opportunities;
    const opportunitiesList = opportunities.map((opportunity) =>  (<OpportunityCard key={opportunity.id} opportunity={opportunity} />))

    return (
      <div>
        <section className=""> 
          <Header />
        </section>
        <section className="oppo_card"> 
          <article>
            { opportunitiesList }
          </article>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    opportunities: state.opportunities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOpportunities: () => dispatch(fetchOpportunities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Opportunities);



