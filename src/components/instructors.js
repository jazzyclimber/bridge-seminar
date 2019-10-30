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

class InstructorSection extends React.Component {
     
     render() {
     const { background = null, id } = this.props 
     
          return (
               <SectionColor 
                    background={ background }
                    id = { id }
                    >
                    <ContentContainer>
                         <ContentWrapper>
                              <h2>Instructors</h2>
                              <h3>Hiroshi Ikeda Shihan</h3>
                              <p>Hiroshi Ikeda Shihan is the founder and chief instructor of Boulder Aikikai, Inc., a non-profit school of Aikido in Boulder, Colorado. He currently holds the rank of 7th Dan through Mitsugi Saotome Shihan and the Aikido World Headquarters (Hombu Dojo) and travel extensively as a guest instructor, conducting Aikido seminars at dojos around the world. He has spent the last 40 years travelling extensively throughout the United States and the world promoting Aikido's philosophy of non-violence, peace, and self-development through constant training. His teaching emphasizes learning and understanding Aikido with the body, specifically the concept of "chushin" or how to maintain one's own center while breaking another's balance. Ikeda Sensei has been a huge influence and driver of Aikido Bridge Seminars and has been involved with the Midwest Bridge Seminar since its inception.</p>
                              
                              <h3>Lisa Tomeloni</h3>
                              <p>Lisa Tomoleoni holds the rank of Roku Dan (6th dan), received directly from Moriteru Ueshiba, Aikido Doshu. She spent over 13 years in Japan training at the Aikido World Headquarters and teaching Aikido professionally at a dojo in Tokyo.  Tomoleoni Sensei is Director of the Aikido Shimbokukai, an organization officially recognized by the Aikikai Foundation and Aikido World Headquarters in Tokyo, Japan, and she serves as the Chief Instructor at Abiding Spirit Aikikai in Illinois. She is also an advisor and instructor at Jiai Aikido in San Diego, California. In addition to her Aikido rank she holds yudansha ranking in Judo and Iaido, and is a member of the Kenshukan Dojo in Tokyo. Tomoleoni Sensei is a co-author of the book "Along the Way", a collection of writings about training.</p>

                              <h3>Kimberly Richardson</h3>
                              <p>Kimberly Richardson is the founder and Chief Instructor of Two Cranes Aikido in Seattle, WA. and the Executive Director of Two Cranes Institute. She began her training  in1978 and met her first teacher Mary Heiny in 1979.  She has studied throughout the United States, Canada, Europe and Japan, most notably with Motomichi Anno Shihan, Saotome Shihan, and Ikeda Shihan, Terry Dobson Sensei and Tom Read Sensei.  Kimberly received her 6th degree black belt from Heiny Sensei  in 2008. That same year Kimberly founded a non-profit, TCI, an Institute that provides educational and embodied leadership programs in the Seattle community and beyond.</p>

                              <h3>Kay Sandacz</h3>
                              <p>Kay Sandacz began her study of Aikido in 1987 and has trained at Inaka Dojo since the doors opened in 1992. She is a direct student of Wendy Whited Sensei and currently holds the rank of 5th degree black belt through ASU.  Through consistent study and frequent attendance at seminars and camps around the country, Sandacz Sensei looks for the simple, natural movements underlying the principles of sound technique as she believes aikido is available for everyone. She focuses on finding clear ways to communicate these movements and principles in her classes at Inaka Dojo and the seminars she teaches.</p>

                              <h3>John Burn</h3>
                              <p>John Burn began training in martial arts at the age of 7 and has been studying aikido since the early 90's; he is the only direct student of Hiroshi Ikeda Sensei in the UK and has maintained a close relationship for over 15 years. He spends countless hours every year with Ikeda sensei including personal instruction. Burn Sensei is the dojo-cho and the head instructor of the Coventry Dojo. Additionally, he works with Mike Sigman Sensei to build his understanding of internal strength/power. The internal aspect of Aikido is his driving interest, specifically in how to use gravity and the ground to bring solidity to his body whilst breaking another's balance. His instruction is built on his ever expanding understanding of body mechanics through constant analysis and study of internal strength with how it relates to Ueshiba's Aikido.</p>

                         </ContentWrapper>
                    </ContentContainer>
               </SectionColor>
          )
     }
}



export default InstructorSection