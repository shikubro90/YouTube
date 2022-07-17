import React from 'react';
import styled from 'styled-components';
import logo from '../img/youtubelogo.png'

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
            </Wrapper>
        </Container>
    );
};

export default Menu;