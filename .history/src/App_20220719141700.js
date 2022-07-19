import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';

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
  return (
    <ThemeProvider>
      
    </ThemeProvider>
  );
}

export default App;
