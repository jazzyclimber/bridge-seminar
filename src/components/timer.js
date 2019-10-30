import React from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
     position: absolute;
     top: -66px;
     left: 50%;
     transform: translateX(-50%);
     background-color: white;
     box-shadow: 0 2px 5px rgba(0,0,0, .2);
     width: calc(100vw - 30px);
     padding: 40px 0;
     z-index: 0;
  @media only screen and (min-width: 992px) {
     width: 80%;
     top: -91px;

  }
`;
const TimerWrapper = styled.div`
   position: relative;
   width: 100%;
   max-width: 900px;
   margin: 0 auto;
   height: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: space-around;
  
  @media only screen and (min-width: 992px) {
       
  }
`;
const TimerItemGroup = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: center;
   align-items: center;
   font-family: 'Montserrat', Arial, Helvetica, sans-serif;
   font-weight: 600;
   font-size: 2rem;


   @media only screen and (min-width: 992px) {
     font-size: 4rem;
   }    
`;
const ItemLabel = styled.div`
  font-weight: 200;
  font-size: 1.5rem;

  @media only screen and (min-width: 992px) {
     font-size: 2.8rem 
  }
`;



class CountdownTimer extends React.Component {
     
     constructor(props) {
          super(props);
      
          this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
          }
        }
      
        componentDidMount() {
          // update every second
          this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
          }, 1000);
        }
      
        componentWillUnmount() {
          this.stop();
        }
      
        calculateCountdown(endDate) {
          let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
      
          // clear countdown when date is reached
          if (diff <= 0) return false;
      
          const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
          };
      
          // calculate time difference between now and expected date
          if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
          }
          if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
          }
          if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
          }
          if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
          }
          timeLeft.sec = diff;
      
          return timeLeft;
        }
      
        stop() {
          clearInterval(this.interval);
        }
      
        addLeadingZeros(value) {
          value = String(value);
          while (value.length < 2) {
            value = '0' + value;
          }
          return value;
        }

     render() {
     const { background = null, id } = this.props 

     const countDown = this.state
     
          return (
               <TimerContainer>
                    <TimerWrapper>
                         <TimerItemGroup>
                              <div>{this.addLeadingZeros(countDown.days)} </div>
                              <ItemLabel>Days</ItemLabel>
                         </TimerItemGroup>
                         <TimerItemGroup>
                              <div>{this.addLeadingZeros(countDown.hours)} </div>
                              <ItemLabel>Hours</ItemLabel>
                         </TimerItemGroup>
                         <TimerItemGroup>
                              <div>{this.addLeadingZeros(countDown.min)} </div>
                              <ItemLabel>Mins</ItemLabel>
                         </TimerItemGroup>
                         <TimerItemGroup>
                              <div>{this.addLeadingZeros(countDown.sec)} </div>
                              <ItemLabel>Sec</ItemLabel>
                         </TimerItemGroup>
                    </TimerWrapper>
               </TimerContainer>

               
                         
          )
     }
}


export default CountdownTimer