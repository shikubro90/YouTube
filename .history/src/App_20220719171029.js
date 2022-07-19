import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme} from './Utils/Theme.js';
import {Brow}


const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 6;
  background: ${({theme})=>theme.bg};
`;
const Wrapper = styled.div`

`;

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar/>
          <Wrapper>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
