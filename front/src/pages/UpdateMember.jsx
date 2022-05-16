import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../functions/functions";
import { updateMember } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 9rem auto 0 auto;
  & > div {
    margin-top: 5%;
  }
`;
const BTN = styled(Button)`
  color: black;
  background-color: mediumaquamarine;

  letter-spacing: 10px;
`;

const defaultValue = {
  name: "",
  email: "",
  phone: "",
  membershipDate: "",
  level: "",
};

const UpdateMember = () => {
  const [member, setMember] = useState(defaultValue);

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
          console.log(post);
          setMember(post);
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

  const onValueChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h5">Add Member</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={member.name}
        />
      </FormControl>

      <FormControl>
        <InputLabel>E-mail</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={member.email}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={member.phone}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Membership date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="membershipDate"
          value={member.membershipDate}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Level</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="level"
          value={member.level}
        />
      </FormControl>

      <FormControl>
        <BTN variant="outlined" onClick={() => updateMember(member)}>
          Submit
        </BTN>
      </FormControl>
    </Container>
  );
};
export default UpdateMember;
