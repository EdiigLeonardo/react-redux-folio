import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 8px;
  
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px;
  background-color: #333996;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    max-height: 200vh;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

`;

const Left = styled.div`
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: bolder;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    max-height: 100vh;
    widht: 50vw;
    max-height: 100vh;
    margin-top: 20px;
  }
  @media only screen and (max-width: 500px) {
    max-height: 100vh;
    min-widht: 50vw;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 2px;
  margin-top: 2px;
  font-size: 76px;
  @media only screen and (max-width: 768px) {
    font-size: 62px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 64px;
    margin-bottom: 2px;
    margin-top: 2px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 2px;
    margin-top: 2px;
  }

  @media only screen and (max-width: 300px) {
    font-size: 24px;
    margin-bottom: 2px;
    margin-top: 2px;
  }
`;

const Habilities = styled.h2`
  font-size: 62px;
  margin-bottom: 2px;
  color: #fbf7ff;
  max-height: 90%;
  overflow-y: auto;

  @media only screen and (max-width: 1000px) {
    font-size: 48px;
    margin-bottom: 4px;
    margin-top: 2px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 36px;
    margin-bottom: 4px;
    margin-top: 1px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 24px;
    margin-bottom: 4px;
    margin-top: 1px;
  }
`;

const Description = styled.span`
  font-size: 1.2em;
  color: #79B5BA;
  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
  }
  @media only screen and (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 8px;
    margin-bottom: 1px;
    margin-top: 1px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    max-height: 100vh;
    max-widht: 50vw;
  }
  
`;

const Desc = styled.p`
  font-size: 24px;
  color: #FBF7FF;
  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
  }
  @media only screen and (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 8px;
    margin-bottom: 1px;
    margin-top: 1px;
  }
`;

const Button = styled.a`
  background-color: #79B5BA;
  color: #FBF7FF;
  font-weight: bold;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    border: 1px solid #79B5BA;
    outline: 1px solid #79B5BA;
    background-color: #005CB3;
  }
`;

const Who = () => {
  const handleSeeWorks = () =>{
    return window.location.href("https://github.com/EdiigLeonardo?tab=repositories")
  }

  return (
    <Section>
      <Container>
        <Left>
          <Habilities>Technical Skills</Habilities>
          <Description>Proficient in JavaScript, SQL and Python</Description>
          <Description>Experience with React, Angular, NodeJs, ExpressJs, Flask, NextJs</Description>
          <Description>Familiarity with Git, Rest, Jira, Redux, HTML/CSS, TailwindCSS, SCSS</Description>
          <Description>Knowledge of Docker, Kubernetes</Description>

          <Habilities>Key Atributtes</Habilities>
          <Description>Quick learner</Description>
          <Description>Detail-oriented and committed to producing high-quality code</Description>
          <Description>Strong problem-solving and analytical skills</Description>
          <Description>Effective communicator and collaborator, able to work well within a team</Description>
        </Left>
        <Right>
          <Title>Warning!!!</Title>
          <Desc>
            Viewing my projects may cause uncontrollable laughter, excessive joy, and occasional snorting. 
            Proceed with caution!
          </Desc>
          <Button href = "https://github.com/EdiigLeonardo?tab=repositories">See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
