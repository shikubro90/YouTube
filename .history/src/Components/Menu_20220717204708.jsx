import React from 'react';
import styled from 'styled-components';
import logo from '../img/youtubelogo.'

const Container = styled.div`
  flex: 1;
  background: #202020;
  height: 100vh;
  color: white;
`;

const Wrapper = styled.div`

`;

const Logo = styled.img`
    
`;


const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src=''/>
            </Wrapper>
        </Container>
    );
};

export default Menu;