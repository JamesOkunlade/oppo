import React from "react";
import { connect } from 'react-redux';

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

const Header = ({ isFullBackground, imageSource, fetchOpportunities }) => {
  return (
    <HeroCTALayout>
      <HeroContainer
        isFullBackground={isFullBackground}
        imageSource={imageSource}
      >
        <Heading>OPPO</Heading>
        <Paragraph>Welcome to the world of opportunities</Paragraph>
        <ButtonContainer>
            <ButtonPrimary>
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

Header.defaultProps = {
  isFullBackground: true,
  imageSource: "https://assets.bytehub.dev/images/hero-background.svg",
};

Header.propTypes = {
  isFullBackground: PropTypes.bool,
  onPrimaryBtnClick: PropTypes.func,
  onSecondaryBtnClick: PropTypes.func,
  imageSource: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(Header);
