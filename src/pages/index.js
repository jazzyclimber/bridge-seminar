import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import WelcomeSection from "../components/welcome-section"
import PricingSection from '../components/pricing'
import LodgingSection from  "../components/lodging"
import Navigation from '../components/navigation'
import ScheduleSection from "../components/schedule"
import InstructorSection from "../components/instructors"
import CountdownTimer from "../components/timer"

let navItems = [
  {"item": "Register", "link": "register"},
  {"item": "About", "link": "first-section"},
  {"item": "Pricing", "link": "pricing"},
  {"item": "Lodging", "link": "lodging"},
  {"item": "Schedule", "link": "schedule"},
  {"item": "Instructors", "link": "instructors"}
]


const SectionColor = styled.div`
  background-color: ${ props => props.background === "dark" ? "#F4F4F4": "#FFFCFC"};
  width: 100%;
`
const SectionContainer = styled.div`
     width: 100%;
     height: auto;
     padding:  10rem 0;

     @media only screen and (min-width: 992px) {
          max-width: 1000px;
          margin: 0 auto;
     }
`;
const RightSection = styled.div`
    width: 100%;
    height: auto;
    padding:  10rem 0;

    @media only screen and (min-width: 992px) {
        max-width: 1000px;
        margin: 0 auto;
    }
`;

class IndexPage extends React.Component{

  state = {
    navigationOffset: null
  }

  welcomeSectionCallback = (offset) => {
    this.setState({
      navigationOffset: offset
    })

    console.log(offset);
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Navigation 
          navList={ navItems }
          navigationOffset={this.state.navigationOffset}
          
          />
          <WelcomeSection 
            id="first-section"
            callBack={this.welcomeSectionCallback} 
            heading="Welcome!"
            content="The 2019 Midwest Bridge Seminar will be held on March 22nd, 2019 thru March 24th, 2019. We are thrilled to be hosting the Bridge Seminar at the Milwaukee Shobukan for the second year in a row. This year will boast an additional 3 hours of classes for a total of 18 hours of instruction!"
            />
          <PricingSection
            id="pricing"
            background="dark"
          />

          <LodgingSection 
            id="lodging"
            name="Lodging"
            background
          />
          <ScheduleSection 
            id="schedule"
            background="dark"
            />
            <InstructorSection
              id="instructors"
              background
            />
      </Layout>
    )
  }
}

export default IndexPage
