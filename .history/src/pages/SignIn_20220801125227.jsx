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
const Title = styled.h1`

`;

const SubTitle = styled.p`
    
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
            <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
            <Input placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <Button>SignIn</Button>
            
            <Title>Or</Title>
            <Input placeholder="username"/>
            <Input type="email" placeholder="email"/>
            <Input type="password" placeholder="password"/>
            <Button>Sign Up</Button>
            
        </Wrapper>
    </Container>    
  )
}

export default SignIn