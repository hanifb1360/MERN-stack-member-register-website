import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../functions/functions";
import styled from "styled-components";
import { deleteMember, updateMember } from "../service/api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-top: 20vh;
  margin-left: 5%;
`;
const MemberBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
  width: 90%;
`;
const SecondMemberBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  
  
  
`;
const Title = styled.h1`
  color: #1d878c;
  margin-top: 3%;
  text-decoration: none;
  font-size: 5vh;
`;
const Member = styled.h2`
  color: black;
  margin-top: 3%;
  text-decoration: none;
`;
const Button = styled.button`
  color: black;
 height: 40px;
 width: 100px;
  border-radius: 20px;
  background-color: gainsboro;
  border: solid 1px black;
`;
const Button2 = styled.button`
  color: black;
 height: 40px;
 width: 180px;
 margin-left: 10px;
  border-radius: 20px;
  background-color: gainsboro;
  border: solid 1px black;
`;

let Members = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getData("http://localhost:8000/posts").then((res) => {
      const sortedPosts = res.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
      setPosts(sortedPosts);

    });
  }, []);

  return (
    <Container>
      <Title>Our Members</Title>
      {posts &&
        posts.map((post) => {
          return (
            <MemberBox>
              
              <SecondMemberBox>
              <Link
                key={`member-${post._id}`}
                style={{ text: "2px solid white" }}
                to={`/details/${post._id}`}
              >
                <Member>{post.name}</Member>
              </Link>
              
              <Button onClick={() => deleteMember(post)}>Delete</Button>
              </SecondMemberBox>

              <Link
                key={`member-${post._id}`}
                to={`/update/${post._id}`}
              >
                <Button2>Update Information</Button2>
              </Link>
              
            </MemberBox>
          );
        })}
    </Container>
  );
};

export default Members;
