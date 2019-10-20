import React from 'react';
import styled from 'styled-components';

const SectionColor = styled.div`
  background-color: ${ props => props.background == "dark" ? "#F4F4F4": "#FFFCFC"};
  width: 100%;
`
const ContentContainer = styled.section`
     width: 100%;
     height: auto;
     padding:  10rem 0;

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


class LodgingSection extends React.Component {
     
     render() {
     const { background = null, heading = "heading", content = "add content here", id } = this.props 
     
          return (
               <SectionColor 
                    background={ background }
                    id = { id }
                    >
                    <ContentContainer>
                         <ContentWrapper>
                              <h2>Lodging</h2>
                              <p>Guests are always welcome to stay in the dojo to save on expenses. Both changing rooms feature showers, and there are numerous restaurants to grab some breakfast in the mornings.</p>
                              <p>You can also take advantage of a discounted hotel room for $74.00/night at:</p>
                              <p>Comfort Suites<br />
                              10831 W. Park Place<br />
                              Milwaukee, WI, 53224</p>
                         
                         </ContentWrapper>
                    </ContentContainer>
               </SectionColor>
          )
     }
}



export default LodgingSection