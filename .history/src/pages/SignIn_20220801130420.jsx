import React from "react"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme})=>theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${({theme})=>theme.bgLighter};
    border: 1px solid ${({theme})=>theme.soft};
    padding: 20px 20px;
`
const Title = styled.h1`
    font-size: 28px;
`;

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 300;
`;

const Input = styled.input`
    border: 1px solid ${({theme})=>theme.soft};
    border-radius: 3px;
    background-color: transparent;
    padding: 10px;
    width: 100%;
`;

const Button = styled.button`
    border-radius: 3px;
    padd
`;
const More = styled.div`
    
`;

const Links = styled.div`
    
`;
const Link = styled.span`
    
`;

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            
            <Title>SignIn</Title>
            <SubTitle>To continue shikutube.</SubTitle>
            <Input placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <Button>SignIn</Button>
            
            <Title>Or</Title>
            <Input placeholder="username"/>
            <Input type="email" placeholder="email"/>
            <Input type="password" placeholder="password"/>
            <Button>Sign Up</Button>

        </Wrapper>

        <More>
            English(US)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>    
  )
}

export default SignIn