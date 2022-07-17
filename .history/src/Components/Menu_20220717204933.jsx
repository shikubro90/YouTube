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
    
`;

const Image = styled.img`
    
`;


const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Image/>
                </Logo>
            </Wrapper>
        </Container>
    );
};

export default Menu;