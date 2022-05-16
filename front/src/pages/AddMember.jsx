import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addMember } from "../service/api";

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

export const AddMember = () => {
  const [member, setMember] = useState(defaultValue);

  const onValueChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const addMemberDetails = async () => {
    console.log(member);
    await addMember(member);
  };

  return (
    <Container>
      <Typography variant="h5">Add Member</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel>E-mail</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>

      <FormControl>
        <InputLabel>Membership date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="membershipDate" />
      </FormControl>

      <FormControl>
        <InputLabel>Level</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="level" />
      </FormControl>

      <FormControl>
        <BTN variant="outlined" onClick={() => addMemberDetails()}>
          Submit
        </BTN>
      </FormControl>
    </Container>
  );
};

