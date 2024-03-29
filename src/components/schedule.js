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
const TableWrapper = styled.div`
  overflow:auto;
`;
const TableBody = styled.div`
     overflow: auto;
     min-width: 760px;
     display: flex;
     flex-direction: row;
     flex-wrap: no-wrap;
     width: 100%;
     align-content: center;
     justify-content: center;
`;

const TableColumn = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     flex-grow: 1;
     align-content: center;
     justify-content:center;
`;
const TableData = styled.div`
     font-size: ${props => props.heading ? "2.2rem" : "1.6rem"};
     font-weight: ${props => props.heading ? "600" : "300"};
     background-color: ${props => props.dark ? "#eeeeee": "initial"};
     font-family: "Montserrat", Arial, Helvetica, sans-serif;
     border-bottom: 1px solid #eeeeee;
     padding: 10px 0;
     text-align: center;

     @media (min-width: 870px) {
          font-size: ${props => props.heading ? "2.2rem" : "1.8rem"};
     }

`;



class ScheduleSection extends React.Component {

     state = {
          columns: [
          {
               "heading": "TIME",
               "slot1": "09:00-09:55",
               "slot2": "10:00-10:55",
               "slot3": "11:00-11:55",
               "slot4": "12:00-12:55",
               "slot5": "01:00-01:55",
               "slot6": "02:00-02:55",
               "slot7": "03:00-03:55",
               "slot8": "04:00-04:55",
               "slot9": "05:00-05:55",
               "slot10": "06:00-06:55",
               "slot11": "07:00-07:55"
               }, {
               "heading": "FRIDAY",
               "slot1": "Hiroshi Ikeda Shihan",
               "slot2": "Mary Heiny Sensei",
               "slot3": "Lisa Tomoleoni Sensei",
               "slot4": "Lunch",
               "slot5": "Lunch",
               "slot6": "Mary Heiny Sensei",
               "slot7": "John Gralton Sensei",
               "slot8": "Lisa Tomoleoni Sensei",
               "slot9": "Hiroshi Ikeda Shihan",
               "slot10": "Pizza Party at Dojo",
               "slot11": "---"
          }, {
               "heading": "SATURDAY",
               "slot1": "Lisa Tomoleoni Sensei",
               "slot2": "Mary Heiny Sensei",
               "slot3": "Hiroshi Ikeda Shihan",
               "slot4": "Lunch",
               "slot5": "Lunch",
               "slot6": "Mary Heiny Sensei",
               "slot7": "Andrew Vitale Sensei",
               "slot8": "Lisa Tomoleoni Sensei",
               "slot9": "Hiroshi Ikeda Shihan",
               "slot10": "Dinner @ Harvey Moy's",
               "slot11": "---"
          }, {
               "heading": "SUNDAY",
               "slot1": "TBD Sensei",
               "slot2": "Mary Heiny Sensei",
               "slot3": "Lisa Tomoleoni Sensei",
               "slot4": "Hiroshi Ikeda Shihan",
               "slot5": "---",
               "slot6": "---",
               "slot7": "---",
               "slot8": "---",
               "slot9": "---",
               "slot10": "---",
               "slot11": "---"
          }
          ] 
     }
     
     // renderTablehead  () {
     //     let header = Object.keys(this.state.head[0])
     //     return header.map((key, index) => {
     //          return <TableHeader key={index}>{key.toUpperCase()}</TableHeader>
     //     });
     // }
     renderTableBody = () => 
          this.state.columns.map( (column, index) => 
               <TableColumn key={index} >
                    <TableData heading>{column.heading}</TableData>
                    <TableData dark>{column.slot1}</TableData>
                    <TableData>{column.slot2}</TableData>
                    <TableData dark>{column.slot3}</TableData>
                    <TableData>{column.slot4}</TableData>
                    <TableData dark>{column.slot5}</TableData>
                    <TableData>{column.slot6}</TableData>
                    <TableData dark>{column.slot7}</TableData>
                    <TableData>{column.slot8}</TableData>
                    <TableData dark>{column.slot9}</TableData>
                    <TableData>{column.slot10}</TableData>
                    <TableData dark>{column.slot11}</TableData>
               </TableColumn>
          )

     

          
     
     render() {
     const { background = null, id } = this.props 
     
          return (
               <SectionColor 
                    background={ background }
                    id = { id }
                    >
                    <ContentContainer>
                         <ContentWrapper>
                              <h2>Schedule</h2>
                              <TableWrapper>
                                   <TableBody>
                                        {this.renderTableBody()}
                                   </TableBody>
                              </TableWrapper>
                         </ContentWrapper>
                    </ContentContainer>
               </SectionColor>
          )
     }
}



export default ScheduleSection