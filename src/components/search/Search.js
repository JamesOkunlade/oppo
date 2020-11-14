import React from "react";
import { connect } from 'react-redux';

import { fetchOpportunities } from "../../actions";
import {
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary,
  Paragraph,
  Heading,
  HeroContainer,
  HeroCTALayout,
} from "./styles";
import PropTypes from "prop-types";

const Search = ({ isFullBackground, imageSource, fetchOpportunities }) => {
  return (
    <HeroCTALayout>
      <HeroContainer
        isFullBackground={isFullBackground}
        imageSource={imageSource}
      >
        <Heading>Welcome to the world of Opportunites</Heading>
        <Paragraph>SubHeading</Paragraph>
        <ButtonContainer>
            <ButtonPrimary onClick={() => fetchOpportunities()}>
              Search
            </ButtonPrimary>
            <ButtonSecondary>
              View saved
            </ButtonSecondary>
        </ButtonContainer>
      </HeroContainer>
    </HeroCTALayout>
  );
}

Search.defaultProps = {
  isFullBackground: true,
  imageSource: "https://assets.bytehub.dev/images/hero-background.svg",
};

Search.propTypes = {
  isFullBackground: PropTypes.bool,
  onPrimaryBtnClick: PropTypes.func,
  onSecondaryBtnClick: PropTypes.func,
  imageSource: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOpportunities: () => dispatch(fetchOpportunities())
  }
}

export default connect(null, mapDispatchToProps)(Search);
