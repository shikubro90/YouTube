import React from 'react';
import styled from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';

const Container = styled.div`

`;
const Main = styled.div`

`;



function App() {
  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
          
      </Main>

    </Container>
  );
}

export default App;
