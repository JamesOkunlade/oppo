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
    const { opportunities = [], isFetching } = this.props.opportunities;
    return (
      <div>
        <section className=""> 
          <Header />
        </section>
        <section className="cart"> 
          <article>
            {opportunities.map((opportunity, index) => {
              return (
                <div>
                  <OpportunityCard key={index} {...opportunity} />
                  <hr/>
                </div>
              ) ;
            })}
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



