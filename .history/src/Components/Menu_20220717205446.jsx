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

`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

`;

const Image = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
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