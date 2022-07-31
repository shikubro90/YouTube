import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../img/channelsThumbnail.jpg'

const Container = styled.div`

`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`
const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const InputComment = styled.input`
    border   : none ;
    border-bottom: 1px solid ${({theme})=>theme.soft};
    padding: 5px;
    background: transparent;
    outline: none;
    color: ${({theme})=>theme.texSoft};
    width: 100%;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src={AvatarImage}/>
                <InputComment placeholder='Add a comment...' />
            </NewComment>
            

        </Container>
    );
};

export default Comments;