import styled from "styled-components";
import { withStyles, Button } from "@material-ui/core";

export const Colors = {
  borderColor: "rgba(0,0,0,0.2)",
  rebeccapurple: "rebeccapurple",
  lightPink: "#ff6d7f",
  white: "#ffffff",
};

const Heading = styled.h2`
  padding-top: 64px;
  color: ${Colors.white};
  font-size: 46px;
  font-weight: 600;
  font-family: helvetica, sans-serif;
  text-align: center;
  @media only screen and (max-width: 640px) {
    font-size: 36px;
  }
`;

const ButtonPrimary = withStyles({
  root: {
    backgroundColor: Colors.lightPink,
    color: `${Colors.white}`,
    textTransform: "none",
    padding: "12px",
    height: "100%",
    margin: "10px",
    minWidth: "160px",
    border: `1px solid ${Colors.lightPink}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: Colors.lightPink,
      opacity: 0.85,
    },
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
  },
})(Button);

const ButtonSecondary = withStyles({
  root: {
    backgroundColor: "transparent",
    color: `${Colors.white}`,
    textTransform: "none",
    minWidth: "160px",
    padding: "12px",
    margin: "10px",
    height: "100%",
    border: `1px solid ${Colors.white}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.85,
    },
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
  },
})(Button);

const Paragraph = styled.p`
  max-width: 980px;
  margin: auto;
  padding: 14px 20px;
  text-align: center;
  font-size: 16px;
  color: ${Colors.white};
  font-family: helvetica, sans-serif;
  line-height: 1.6;

  @media only screen and (max-width: 640px) {
    font-size: 14px;
    padding: 14px 30px;
  }
`;

const ButtonContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  flex-flow: wrap;
  @media only screen and (max-width: 640px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const HeroContainer = styled.div`
  position: static;
  top: 0;
  border-radius: ${(props) => (props.isFullBackground ? "none" : "40px")};
  width: ${(props) => (props.isFullBackground ? "100%" : "980px")};
  max-height: 100%;
  background: url(${(props) => (props.imageSource ? props.imageSource : "")})
    no-repeat 50% fixed;
  background-size: cover;
`;

const HeroCTALayout = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export {
  Heading,
  Paragraph,
  ButtonPrimary,
  ButtonSecondary,
  ButtonContainer,
  HeroContainer,
  HeroCTALayout,
};
