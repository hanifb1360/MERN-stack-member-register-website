
import styled from 'styled-components';


const Container = styled.div`
display: flex;
background-color: black;
color: white;
margin-top: 10%;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
margin-top: 3%;
`
const Title = styled.h3`
margin-bottom: 30px;
`


const Logo = styled.h1`
color: coral;

`
const Desc = styled.p`
margin: 20px 0px;
font-size: small;
color: lightgray;
`
const SocialContainer = styled.div`
display: flex;
gap: 20%;
align-items: center;
`
const SocialIcon = styled.div`

`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
font-size: small;
align-items: center;
color: lightgray;

`





const Footer = () => {
  return <Container>
  <Left><Logo>ATTC.</Logo>
  <h5>Akalla Table Tennis Comminuty AB</h5>
  <Desc>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora corporis placeat ut veritatis modi, sit suscipit id illo, eos expedita aspernatur fugiat nemo sequi ducimus ipsam deserunt cupiditate explicabo! Temporibus?
  </Desc>
  <SocialContainer>
  <SocialIcon></SocialIcon>
  <SocialIcon></SocialIcon>
  <SocialIcon></SocialIcon>
  
  </SocialContainer>
  </Left>


  <Center>
 
  </Center>

  <Right>
      <Title>Contact</Title>
      <ContactItem>Kungsgatan 27, 111 56 Stockholm</ContactItem>
      <ContactItem>+46 765 760 186</ContactItem>
      <ContactItem>contact@attc.com</ContactItem>
      
  </Right>

  </Container>;
};

export default Footer;
