import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { connect, useDispatch } from 'react-redux';
import { toggleImageClick } from '../store/action';
import resume from '../assets/resume.pdf';

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }


`;

const Container = styled.div`
  background-color: #333996;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  gap: 12px;
  align-items: center;
  padding: 12px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const ListItemLink = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;

  &:hover{
    color: #79B5BA;
  }

  &:visited {
    color: white;
    &:hover{
      color: #79B5BA;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.span`
  cursor: pointer;
  text-align: center;
`;

const Button = styled.a`
  text-decoration: none;
  min-width: 10em;
  padding: 10px;
  background-color: #79B5BA;
  color: #FBF7FF;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    border: 1px solid #79B5BA;
    outline: 1px solid #79B5BA;
    background-color: #005CB3;
  }
`;

const Navbar = ({isThemeChanged}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleImageClick());
  };

  const handleDownload = () =>{
    alert("We are building these functionalities, thank you!");
  }
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>
              <ListItemLink href="https://www.linkedin.com/in/edig-leonardo77/">
                <Icon><FontAwesomeIcon icon={faLinkedinIn} /></Icon>
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="https://github.com/EdiigLeonardo?tab=repositories">
                <Icon><FontAwesomeIcon icon={faGithubAlt} /></Icon>
              </ListItemLink>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <List>
            <ListItem>
              <ListItemLink onClick={handleClick}><Icon><FontAwesomeIcon icon={isThemeChanged? faSun : faMoon} /></Icon></ListItemLink>
            </ListItem>
          </List>
          <Button href={resume}download="Edig-Resume">Download CV</Button>
        </Icons>
      </Container>
    </Section>
  );
};
const mapStateToProps = (state) => {
  return {
    isThemeChanged: state.isThemeChanged,
  };
};

export default connect(mapStateToProps)(Navbar);