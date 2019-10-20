import styled from 'styled-components'
import React from "react"


const Hero = styled.header`
  background-color: #F4F4F4;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 1.45rem 1.0875rem;
`
const HeroText = styled.div`
  text-align: center;
`
const HeroSubtitle = styled.div`
  @media only screen and (min-width: 992px) {
    font-size: 3.3rem;
    font-weight: 600;
    margin-top: 2rem;
  }
`;

const Header = () => (
  <Hero>
    <HeroText>
      <h1>
        Midwest Aikido
      </h1>
      <HeroSubtitle>- Bridge Seminar -</HeroSubtitle>
    </HeroText>
  </Hero>
)

export default Header
