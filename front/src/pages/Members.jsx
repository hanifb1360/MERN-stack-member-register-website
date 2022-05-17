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
  color: white;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  background-color: #6E9D9A ;
  border: none;
`;
const Button2 = styled.button`
  color: white;
  height: 40px;
  width: 180px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: #6E8E9D ;
  border: none;
`;
const Button3 = styled.button`
  color: white;
  height: 30px;
  width: 80px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #C70039 ;
  border: none;
  margin-top: 10%;
`;

let Members = () => {
  let [posts, setPosts] = useState([]);
  const [sortTypeIncreasing, setSortTypeIncreasing] = useState(true);

  useEffect(() => {
    getData("http://localhost:8000/posts").then((res) => {
      sorting(res);
    });
  }, []);

  const sorting = (list) => {
    if (sortTypeIncreasing) {
      list = list.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
    } else {
      list = list.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        return 0;
      });
    }

    setPosts(list);
  };

  const onSortHandler = () => {
    setSortTypeIncreasing(!sortTypeIncreasing);
    sorting(posts);
  };

  return (
    <Container>
      <Title>Our Members</Title>
      <Button3 onClick={() => onSortHandler()}>Sort</Button3>
      {posts &&
        posts.map((post,index) => {
          return (
            <MemberBox key={index}>
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

              <Link key={`member-${post._id}`} to={`/update/${post._id}`}>
                <Button2>Update Information</Button2>
              </Link>
            </MemberBox>
          );
        })}
      
    </Container>
  );
};

export default Members;
