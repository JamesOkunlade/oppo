import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchSavedOpportunities } from "../actions";
import Header from "../components/header/Header"
import SavedOpportunityCard from "../components/savedOpportunityCard/SavedOpportunityCard"


class savedOpportunities extends Component {
  componentDidMount() {
    this.props.fetchSavedOpportunities();
  }

  render() {    
    const { savedOpportunities = [], isFetching } = this.props.savedOpportunities;
    return (
      <div>
        <section className=""> 
          <Header />
        </section>
        <section className="cart"> 
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
}


const mapStateToProps = (state) => {
  return {
    savedOpportunities: state.savedOpportunities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSavedOpportunities: () => dispatch(fetchSavedOpportunities())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(savedOpportunities);



