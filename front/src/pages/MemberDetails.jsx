import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getData } from "../functions/functions";
import dayjs from 'dayjs';

const Container = styled.div`
  width: 50%;
  margin: 9rem auto 0 auto;
`;
const InfoBox= styled.div`
  
  margin-top: 20%;
`;
const Info= styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

`;
const Title = styled.h1`
  color: black;
  margin-top: 10%;
`;
const Title2 = styled.h3`
  color: black;
  margin-top: 5px;
 
`;
const Span = styled.h3`
  color: #1D648C ;
  margin-top: 5px;
 
`;





const MemberDetails = () => {
  
  const [postId, setPostId] = useState();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log("starting api");
    if (id) setPostId(id);
    getData("http://localhost:8000/posts").then((res) => {
      console.log("response", res);
      setPosts(res);
    });
  }, [id]);
 

  useEffect(() => {
    if (posts.length > 0) {
      //First approach- const filteredPosts = posts.filter((post) => post._id === postId);
      // console.log("posts", filteredPosts);
      // setPost(filteredPosts[0]);
      posts.map((post) => {
        if (post._id === postId) {
          setPost(post);
        }
      });
      //Third approach- posts.forEach((post) => {
      //   console.log("post", post);
      //   if (post._id === postId) {
      //     setPost(post);
      //   }
      // });
    }
  }, [posts]);

  

  return (
    <Container>
      <Title>Member Information</Title>
      
      <InfoBox>
      <Info><Title2>Name:</Title2><Span>{post && post.name}</Span></Info>
      <Info><Title2>E-mail:</Title2><Span>{post && post.email}</Span></Info>
      <Info><Title2>Phone:</Title2><Span>{post && post.phone}</Span></Info>
      <Info><Title2>Membership Date:</Title2><Span>{post && dayjs(post.membershipDate).format('YY-MM-DD')}</Span></Info>
      <Info><Title2>Level:</Title2><Span>{post && post.level}</Span></Info>
      </InfoBox>

    </Container>
  );
};
export default MemberDetails;
