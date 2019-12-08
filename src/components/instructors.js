import React from 'react';
import styled from 'styled-components';
import heroshi from '../images/heroshi.jpg';
import andrew from '../images/andrew.jpg';
import lrt from '../images/lrt.jpg';
import mary from '../images/Mary3.jpg';

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
const BioWrapper = styled.div `
     width: 100%;
     position: relative;
     clear: both;
     overflow: auto;

     > img {
          float: none;
          width: 100%;
          display: block;
          padding: 0 0 20px 0;
     }

     @media(min-width: 500px) {

          >img {
               float: left;
               max-width: 50%;
               padding:0 20px 5px 0;
          }
     }
`

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

                              <BioWrapper>
                                   <h3>Hiroshi Ikeda Shihan</h3>
                                   <img src={heroshi} alt="Heroshi Ikeda Sensei"/>
                                   <p>Hiroshi Ikeda Shihan is the founder and chief instructor of Boulder Aikikai, Inc., a non-profit school of Aikido in Boulder, Colorado. He currently holds the rank of 7th Dan through Mitsugi Saotome Shihan and the Aikido World Headquarters (Hombu Dojo) and travel extensively as a guest instructor, conducting Aikido seminars at dojos around the world. He has spent the last 40 years travelling extensively throughout the United States and the world promoting Aikido's philosophy of non-violence, peace, and self-development through constant training. His teaching emphasizes learning and understanding Aikido with the body, specifically the concept of "chushin" or how to maintain one's own center while breaking another's balance. Ikeda Sensei has been a huge influence and driver of Aikido Bridge Seminars and has been involved with the Midwest Bridge Seminar since its inception.</p>
                              </BioWrapper>

                              <BioWrapper>
                                   <h3>Mary Heiny</h3>
                                   <img src={mary} alt="Mary Heiny"/>
                                   <p>Mary Heiny started on a journey of physical and spiritual inspiration as a student of Aikido in 1965 after watching O-Sensei teach a class at Hombu Dojo in Tokyo, Japan. After studying in Tokyo and in Shingu from 1968 to 1973, Mary Sensei returned to the United States and began to teach as one of the pioneering Aikido instructors in America. Based in Seattle, she frequently teaches Aikido seminars in the United States, Canada, and abroad. Mary Sensei’s teaching is dynamic, eloquent, and accessible. She brings to every seminar not only her years of Aikido training and teaching, but also her extensive study of Japanese culture, language, and Shinto and Buddhist philosophies. She communicates the beauty and challenge of O-Sensei's desire that we use Aikido to become empowered as creative, compassionate beings and learn to appreciate each other as members of one human family.</p>
                              </BioWrapper>
                              
                              <BioWrapper>
                                   <h3>Lisa Tomoleoni</h3>
                                   <img src={lrt} alt="Lisa Tomoleoni"/>
                                   <p>Lisa Tomoleoni holds the rank of Roku Dan (6th dan), received directly from Moriteru Ueshiba, Aikido Doshu. She spent over 13 years in Japan training at the Aikido World Headquarters and teaching Aikido professionally at a dojo in Tokyo.  Tomoleoni Sensei is Director of the Aikido Shimbokukai, an organization officially recognized by the Aikikai Foundation and Aikido World Headquarters in Tokyo, Japan, and she serves as the Chief Instructor at Abiding Spirit Aikikai in Illinois. She is also an advisor and instructor at Jiai Aikido in San Diego, California. In addition to her Aikido rank she holds yudansha ranking in Judo and Iaido, and is a member of the Kenshukan Dojo in Tokyo. Tomoleoni Sensei is a co-author of the book "Along the Way", a collection of writings about training.</p>
                              </BioWrapper>

                              <BioWrapper>
                                   <h3>John Gralton</h3>
                                   <p>John Gralton has pursued the sudy of Aikido for the last 20 years at various dojos, including the Milwaukee Aikido Club, Inaka Dojo, Kettle Moraine Aikido Club, and most recently Aikido of West Bend. He truly enjoys studying the marriage of martial application and life enriching artistic expression. Gralton Sensei has served as Dojo-Cho of the Milwaukee Shobukan since November, 2017. He currently holds the rank of Nidan.</p>
                              </BioWrapper>

                              <BioWrapper>
                                   <h3>Andrew Vitales</h3>
                                   <img src={andrew} alt="Andrew Vitales"/>
                                   <p>Andrew Vitale Sensei began studying aikido in August 1996 as a graduate student at Southern Illinois University at Carbondale.  He joined the Chicago Aikikai as a full-time member in 1998 where he studied under the late Kevin Choate Sensei until his untimely passing in 2012.  Today, Vitale Sensei is an active student / instructor at the Chicago Aikikai under Marsha Turner Sensei and travels extensively throughout the Midwest and the nation for various seminars and camps.  In March 2019, he was awarded the rank of yondan.</p>
                              </BioWrapper>
                         </ContentWrapper>
                    </ContentContainer>
               </SectionColor>
          )
     }
}



export default InstructorSection