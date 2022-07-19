import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme} from './Utils/Theme';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 6;
  background: #181818;
`;
const Wrapper = styled.div`

`;

function App() {

  const [darkMode, setDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={darkTheme? darkTheme : lightTheme}>
      <Container>
        <Menu darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
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