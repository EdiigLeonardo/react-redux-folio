import Hero from "./pages/Hero"
import Contact from "./pages/Contact"
import Who from "./pages/Who"
import styled from "styled-components";
import { connect } from 'react-redux';



/*
  Dominant: #6F00FF;
  #9D84B6
  #FDEAF
  #63BAAB
  #7B5700

 */
const Section = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color:  #FDEAFF;
  background: url("./img/bg.jpeg");
  max-width: 100vw;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > *{
    max-width: 100vw;
  }

  ${({ isThemeChanged }) =>
    !isThemeChanged &&
    `
    background: #FFF6FF;
    & > :first-child,
    & > :last-child {
      h1,h2,h3{
        color: #6F00FF;
      }
    }

    & > :first-child{
      & > :last-child {
        span{
          color: #6F00FF;
        }
    }

  `}
`;

function App({ isThemeChanged }) {
  return (
    <Section isThemeChanged={isThemeChanged}>
      <Hero/> 
      <Who/>
      <Contact/>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    isThemeChanged: state.isThemeChanged,
  };
};

export default connect(mapStateToProps)(App);
