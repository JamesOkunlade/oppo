import React, { Component } from "react";
import { connect } from 'react-redux';

import Search from "../components/search/Search"
import OpportunityCard from "../components/opportunityCard/OpportunityCard"


class Opportunities extends Component {
  render() {    
    const { opportunities = [], isFetching } = this.props.opportunities;
    return (
      <div>
        <section className=""> 
          <Search />
        </section>
        <section className="cart"> 
          <article>
            {opportunities.map((opportunity, index) => {
              return <OpportunityCard key={index} {...opportunity} />;
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

export default connect(mapStateToProps)(Opportunities);



