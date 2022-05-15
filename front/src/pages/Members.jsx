import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getData } from "../functions/functions";
import styled from 'styled-components';



const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
color: white;
margin-top: 20vh;
margin-left: 5%;
`
const Title = styled.h1`

color: #1D878C;
margin-top: 3%;
text-decoration: none;
font-size: 5vh;



`
const Member = styled.h2`

color: black;
margin-top: 3%;
text-decoration: none;

`

let Members = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getData("http://localhost:8000/posts").then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <Container>
    <Title>Our Members</Title>
      {posts &&
        posts.map((post) => {
          return (

            
            <Link
              key={`member-${post._id}`}
              style={{ text: "2px solid white"}}
              to={`/details/${post._id}`}
            >
              <Member>{post.name}</Member>
               
            </Link>
          );
        })}
    </Container>
  );
};

export default Members;
