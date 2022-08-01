import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme} from './Utils/Theme.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';


const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 6;
  background: ${({theme})=>theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>}/>
                  <Route path='signin'  />
                  <Route path="video">
                    <Route path=':id' element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
