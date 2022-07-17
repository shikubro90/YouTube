import React from 'react';
import styled from 'styled-components';
import logo from '../img/youtubelogo.png'

import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
  flex: 1;
  background: #202020;
  height: 100vh;
  color: white;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Item = styled.div`
  display  : flex;
`;

const Image = styled.img`
    width: 35px;
    height: 25px;
    
`;


const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Image src={logo}/>
                    ShikuTube
                </Logo>
                <Ite
            </Wrapper>
        </Container>
    );
};

export default Menu;