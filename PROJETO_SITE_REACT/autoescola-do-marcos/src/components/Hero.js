import React from "react";
import styled, { css } from "styled-components";

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

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
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
  }
`;

const Container = styled.div`
  background-color: red;
  width: 100%;
  padding: 0 8px;

  @media (min-width: 768) {
    background-color: green;
    padding: 0 16px;
  }

  @media (min-width: 1200px) {
    background-color: blue;
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default hero;
