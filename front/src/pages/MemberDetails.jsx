import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getData } from "../functions/functions";

const Container = styled.div`
  width: 50%;
  margin: 9rem auto 0 auto;
`;
const Title = styled.h1`
  color: black;
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
      //First solution- const filteredPosts = posts.filter((post) => post._id === postId);
      // console.log("posts", filteredPosts);
      // setPost(filteredPosts[0]);
      posts.map((post) => {
        if (post._id === postId) {
          setPost(post);
        }
      });
      //Third solution- posts.forEach((post) => {
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
      {/* <Title>{post.email || ""}</Title> */}
      <Title>{post && post.name}</Title>
      <Title>{post && post.email}</Title>
      <Title>{post && post.phone}</Title>
      <Title>{post && post.membershipDate}</Title>
    </Container>
  );
};
export default MemberDetails;
