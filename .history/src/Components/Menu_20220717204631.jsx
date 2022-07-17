import React from 'react';
import styled from 'styled-components';

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


const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo/>
            </Wrapper>
        </Container>
    );
};

export default Menu;