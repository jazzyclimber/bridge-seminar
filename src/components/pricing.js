import React from 'react';
import styled from 'styled-components';

const SectionColor = styled.div`
  background-color: ${ props => props.background == "dark" ? "#F4F4F4": "#FFFCFC"};
  width: 100%;
`
const ContentContainer = styled.section`
     width: 100%;
     height: auto;
     padding:  10rem 15px;

     @media only screen and (min-width: 992px) {
          max-width: 1000px;
          margin: 0 auto;
     }
     `
const ContentWrapper = styled.div`
     width: 100%;
     @media only screen and (min-width: 992px) {
          width: 85%;
          margin-left: 15%;
     } 
`;

class PricingSection extends React.Component {
     
     render() {
     const { background = null, heading = "heading", content = "add content here", id } = this.props 
     
          return (
               <SectionColor 
                    background={ background }
                    id = { id }
                    >
                    <ContentContainer>
                         <ContentWrapper>
                              <h2>Pricing</h2>
                              <p>$225.00 - Full Seminar Fee at the door</p>
                              <span>
                              <ul>
                                   <li>$50.00 - Friday Morning 3hr Session</li>
                                   <li>$60.00 - Friday Afternoon 4hr Session</li>
                                   <li>$50.00 - Saturday Morning 3hr Session</li>
                                   <li>$60.00 - Saturday Afternoon 4hr Session</li>
                                   <li>$60.00 - Sunday Morning 4hr Session</li>
                              </ul>
                              </span>
                              
                              <p>20% Student discount available for full seminar, or for selected sessions.</p>
                              <p>There will also be 2 dinner events.  One on Friday evening, and the other Saturday night.
                                   <ul>
                                        <li>$15.00 - Friday Evening Party</li>
                                        <li>$30.00 - Saturday Evening Dinner</li>
                                   </ul>
                              </p>
                              <p>Pre-Registration closed on Friday, March 8th.</p>
                         </ContentWrapper>
                    </ContentContainer>
               </SectionColor>
          )
     }
}



export default PricingSection