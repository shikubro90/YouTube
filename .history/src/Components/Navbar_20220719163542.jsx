import React from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlined from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme})=>theme.bgLighter};
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`;
const Search = styled.div`
    
`;
const Input = styled.input`
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
`;
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color : #3ea6ff;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>

                <Input placeholder='Search'/>
                </Search>
                <SearchOutlinedIcon/>
                
                <Button><AccountCircleOutlinedIcon/> SIGN IN</Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;