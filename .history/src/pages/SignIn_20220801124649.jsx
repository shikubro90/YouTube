import React from "react"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme})=>theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme})=>theme.bgLighter};
    border: 1px solid ${({theme})=>theme.soft};
    padding: 20px 10px;
`
const Title = styled.div`

`;

const SubTitle = styled.div`
    
`;

const Input = styled.input`

`;

const Button = styled.button`
    
`


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SignIn</Title>
        </Wrapper>
    </Container>    
  )
}

export default SignIn