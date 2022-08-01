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
    background-color: ${({theme})=>theme.bgLighter};
    background-color: ${({theme})=>theme.bgLighter};
    padding: 20px 10px;

`


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            SignIn
        </Wrapper>
    </Container>    
  )
}

export default SignIn