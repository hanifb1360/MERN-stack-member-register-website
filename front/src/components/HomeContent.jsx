import { Typography } from "@mui/material"
import image from "../images/ping.jpeg";
import styled from 'styled-components';


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 10rem;
`
const Image = styled.img`
width: 50%;
`
const Title = styled.h2`

font-size: 6vw;
font-weight: 200;
`
const SubTitle = styled.h5`
font-size: 3vw;
font-weight: 100;
letter-spacing: .25em;
`
const Description = styled.p`
font-size: 2vh;
font-weight: 400;
padding: 5% 20%;
`

export const HomeContent = () => {

    
    return (
      <Container>
      <Title>Akalla Table Tennis Community</Title>
      <SubTitle>We like what we do</SubTitle>
  
      <Image src={image}/> 
      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt eros. In laoreet efficitur quam, ac molestie sem semper eu. Fusce vitae quam in turpis varius sodales id in libero. Aliquam venenatis, lorem a tristique vehicula, dui nulla consequat leo, in malesuada nibh libero vel nunc. Duis pharetra, felis ut ornare condimentum, lacus urna consectetur erat, eget feugiat urna velit nec sapien. Integer eget facilisis lorem, nec suscipit dui. Vestibulum venenatis, eros sit amet lacinia placerat, neque enim viverra mi, ac sollicitudin velit dolor vel enim. Nullam in imperdiet mi, ut congue diam. Duis elit turpis, imperdiet sit amet placerat ac, molestie sit amet est. Proin vehicula eros in ante tincidunt aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      </Description>
  
      </Container>
    )
  }
  