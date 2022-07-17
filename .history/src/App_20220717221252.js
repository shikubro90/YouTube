import React from 'react';
import styled from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`

`;


function App() {
  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
        <Wrapper>
          <h1></h1>
        </Wrapper>
      </Main>

    </Container>
  );
}

export default App;
