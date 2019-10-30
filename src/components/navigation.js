import React from 'react'
import styled from 'styled-components';
import {Link, animateScroll as scroll} from 'react-scroll';

 const ListItem = styled.li`
   text-decoration: none;
   padding: 5px 0;
   text-align: right;
 `;
const NavList = styled.ul`
     width: 100%;
`;
const NavContainer = styled.div`
  display: none;
  z-index: 100;

@media only screen and (min-width: 992px){
  display: block;
  max-width: 300px;
  background-color: transparent;
  display: inline;
  position: fixed;
  top: ${ props => props.offset >= 0 ? props.offset + 200 + "px" : "200px" }; /* sets iniital position of navigatin based on welcome section positin */
  left: 50px;
  bottom: 0;
}

@media only screen and (min-width: 1350px){
     left: 200px;
}

`;




class Navigation extends React.Component {


     // state = {
     //      fixPosition: '300px'
     // }

     render() {

          const { navList, navigationOffset } = this.props;
          

          return (
              <NavContainer 
               id="navigation"
               offset= {navigationOffset} >
                   <NavList>
                        {navList.map(
                              item => 
                                   <ListItem>
                                        <Link 
                                             smooth={true} 
                                             activeClass="active"
                                             to={item.link} 
                                             // href={item.link} 
                                             >
                                                  {item.item}
                                             </Link>
                                   </ListItem>
                        )}
                   </NavList>
              </NavContainer>
          )
     }
}

export default Navigation