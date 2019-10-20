import React from 'react'
import styled from 'styled-components';

 const ListItem = styled.li`
   text-decoration: none;
   padding: 5px 0;
   text-align: right;
 `;
const NavList = styled.ul`
     width: 100%;
`;
const NavLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-family: 'Montserrat', arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  color: black;

  :active {
  }
`;
const NavContainer = styled.div`
  display: none;

@media only screen and (min-width: 992px){
  display: block;
  max-width: 300px;
  background-color: transparent;
  display: inline;
  position: fixed;
  top: ${ props => props.offset >= 200 ? props.offset + "px" : "200px" };
  left: 50px;
  bottom: 0;
}

@media only screen and (min-width: 1350px){
     left: 200px;
}

`;




class Navigation extends React.Component {


     state = {
          fixPosition: '500px'
     }


     // handleScroll = () => {
     //      let rect = this.getBoundingClientRectt();

     //      this.setState({
     //           scrolled: true,
     //           windowPosition: rect
     //      })

     //    console.log(this.state);
     // }

     // componentDidMount() {
     //      window.addEventListener('scroll', this.handleScroll);
     //      console.log(this.state);
     // }
     // componentWillUnmount() {
     //      window.removeEventListener('scroll', this.handleScroll);
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
                                        <NavLink href={item.link}>{item.item}</NavLink>
                                   </ListItem>
                        )}
                   </NavList>
              </NavContainer>
          )
     }
}

export default Navigation