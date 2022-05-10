import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Container = styled.div`
overflow: hidden;
position: fixed;
top: 0; 

display: flex;
justify-content: space-around;
align-items: center;
background-color: black;
color: white;
height: 7rem;
width: 100%;
`
const TabBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: black;
color: white;
height: 50px;
width: 70%;

`
const Logo = styled.h2`

color: orange;
font-size: 20px;

`

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  position: relative;
  transition:  .3s ease-in-out;
  font-size: 2vh;
  font-weight: 200;
  letter-spacing: .1em;

  &::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: white;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}
  

  &:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  color: turquoise;
}
  
`;



export const Navbar = () => {
  return (
    <Container>
    
      

      <Logo color="oral">ATTC.</Logo>

      <TabBox>
         <StyledLink to='/'>Home</StyledLink>
         <StyledLink to='/all'>Members</StyledLink>
         <StyledLink to='/add'>Add Member</StyledLink>
      </TabBox>

      
      
    </Container>
  );
};
