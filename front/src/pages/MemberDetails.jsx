
import { useState } from "react";
import { getSpecificMember } from "../service/api";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: 9rem auto 0 auto;
 
`;
const Title = styled.h1`

`;


const defaultValue = {
  name: "",
  email: "",
  phone: "",
  membershipDate: "",
  level: "",
};

export const MemberDetails = () => {
  const [member, setMember] = useState(defaultValue);

  const { id } = useParams();
  console.log(id);

  const onValueChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const addMemberDetails = async () => {
    console.log(member);
  };

  return (
    <Container>
      <Title>Member Information</Title>
      
    </Container>
  );
};
