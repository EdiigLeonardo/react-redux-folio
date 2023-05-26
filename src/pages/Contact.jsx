import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "../components/Map";
import axios from "axios";

const Section = styled.div`
  height: 100vh;
  max-width: 100vw;
  padding: 8px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Form = styled.form`
  width: 500px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    max-width: 100vw;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #220651; /* #79B5BA*/
  color: #FBF7FF;
  border: none;
  border-radius: 5px;
  &::placeholder{
    color: #FBF7FF;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #220651;
  resize: none;
  color: #FBF7FF;
  &::placeholder{
    color: #FBF7FF;
  }
`;

const Button = styled.button`
  background-color: #79B5BA;
  max-width: 100vw;
  border: none;
  color: #FBF7FF;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  &:hover{
    border: 1px solid #79B5BA;
    outline: 1px solid #79B5BA;
    background-color: #005CB3;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("https://getform.io/f/dd30355a-2c79-40c8-b0fa-0b5826778f3d", {
        message: "Hello, World",
    }, 
    { headers: {'Accept': 'application/json'}})
    .then(response => console.log(response))
    .catch(error => console.log(error))
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} /* onSubmit={handleSubmit} */
          action='https://getform.io/f/dd30355a-2c79-40c8-b0fa-0b5826778f3d'
          method='POST'
          encType='multipart/form-data'>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;