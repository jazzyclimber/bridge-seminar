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
  padding: 10.5rem 1.0875rem;

  @media only screen and (min-width: 992px) {
    padding: 20.5rem 1.0875rem ;
  }

`
const HeroText = styled.div`
  text-align: center;
  font-size: 3.7rem;
  @media only screen and (min-width: 992px) {
    
  }
`
const HeroSubtitle = styled.div`
  font-size: 2rem;
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
