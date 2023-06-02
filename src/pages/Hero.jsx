import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { connect, useDispatch } from 'react-redux';
import { toggleImageClick } from '../store/action';

const Section = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  @media only screen and (max-width: 1000px) {
    min-height: 200vh;
  }
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 90%;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: #FBF7FF;
  font-weight: bolder;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 74px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 62px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 200px) {
    font-size: 28px;
  }

`;


const Span = styled.span`
  color: #79B5BA;
  font-weight: bolder;
`

const Right = styled.div`
  width: 50%;
  cursor: pointer;

  @media only screen and (max-width: 100px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

`;

const StyledCanvas = styled(Canvas)`
  height: 80%;
  position: absolute;
  z-index: 0;

  @media only screen and (max-width: 768px) {
    display: none;
    /* width: 319.792px;
    margin: auto;
    height: 212px;
    touch-action: none; */
  }
  }
`;

const Img = styled.img`
  max-width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 50%;
  right: 0;
  margin: auto;
  cursor: pointer;
  animation: animate 2s infinite ease-out alternate;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    0% {
      transform: translateY(10px) translateX(0px);
    }
    25% {
      transform: translateY(50px) translateX(30px);
    }
    50% {
      transform: translateY(70px) translateX(50px);
    }
    75% {
      transform: translateY(80px) translateX(80px);
    }
    95% {
      transform: translateY(-190px) translateX(-190px);
    }
    100% {
      transform: translateY(-400px) translateX(-400px);
    }
  }

  &:hover::after{
    content: "Change Theme";
    background-color: #333996;
    position: absolute;
    color: #FBF7FF;
    z-index: 1000000;
  }
`;

const Hero = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleImageClick());
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hello World! I'm Edig Leonardo</Title>
          <Span>Software Engineer / Full Stack Developer</Span>
        </Left>
        <Right>
        <StyledCanvas>
          <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#79B5BA"
                  attach="material"
                  distort={0.8}
                  speed={4}
                />
              </Sphere>
          </Suspense>
        </StyledCanvas>
          <Img
            src="./img/moon.png"
            onClick={handleClick}       
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Right>
      </Container>
    </Section>
  );
};

export default connect(null)(Hero);