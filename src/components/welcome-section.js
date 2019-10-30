import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CountdownTimer from '../components/timer'

const SectionColor = styled.div`
  background-color: ${ props => props.background == "dark" ? "#F4F4F4": "#FFFCFC"};
  width: 100%;
  position: relative;
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
     padding-top: 80px;
     @media only screen and (min-width: 992px) {
          width: 85%;
          margin-left: 15%;
          padding-top: 100px;
     } 
`;

class WelcomeSection extends React.Component {
     
     state = {
          Offset: 450
     }

     handleScroll = () => {
          let rect = ReactDOM.findDOMNode(this).getBoundingClientRect().top;

          this.setState({
               Offset: rect
          })

          // Sends the rect to parent. 
          this.props.callBack(rect);
     }
     componentDidMount() {
          this.handleScroll();
          window.addEventListener('scroll', this.handleScroll );
     }

     render() {
     const { background = null, heading = "heading", content = "add content here", id } = this.props 
     
          return (
               <SectionColor 
                    background={ background }
                    id = { id }
                    >
                    <ContentContainer>
                         <ContentWrapper>
                              <h2>{heading}</h2>
                              <p>{content}</p>
                         </ContentWrapper>
                    </ContentContainer>
                    <CountdownTimer
                         date="03/22/2020"
                    />
               </SectionColor>
          )
     }
}



export default WelcomeSection