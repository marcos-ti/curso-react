import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { breakAt, BreakpointSizes } from "./Breakpoints";
// import HeroStories from "../stories/Hero.stories";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);

    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `};
`;

const Content = styled.div`
  p,
  li {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${colorYellow};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 16px;
    margin: 0 auto;
  }

  ${breakAt(BreakpointSizes.md)} {
    padding: 24px;
    margin: 0 auto;
  }
  ${breakAt(BreakpointSizes.lg)} {
    // background-color: rgba(159, 90, 253, 0.9);
    padding: 32px;
    margin: 0 auto;
  }
  ${breakAt(BreakpointSizes.xl)} {
    padding: 64px;
    margin: 0 auto;
  }
`;

const hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

hero.propTypes = {
  /**
   * Background image
   */
  image: PropTypes.string,
  children: PropTypes.node,
};
//Criando valores padrão
// hero.defaultProps = {
//   title: "Meu Título",
// };

export default hero;
