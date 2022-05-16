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
      On a hot summer day in 1995, two Swedish national table tennis champions from the Akalla neighborhood were talking in a café about how to get the neighborhood youth involved in table tennis and create a friendly atmosphere between neighbors. This is the beginning of our story, a story that continues. In this sports and cultural complex, we do our best to create a suitable environment for cultivating the talents of the youth of this neighborhood. The complex has several permanent sponsors, including Tetracell and Metrocancer, as well as government support, so membership in the group is free.

      </Description>
  
      </Container>
    )
  }
  