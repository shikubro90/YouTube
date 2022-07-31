import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../img/channelsThumbnail.jpg'

const Container = styled.div`

`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: ;

`

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const InputComment = styled.input`
    
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src={AvatarImage}/>
                <InputComment/>
            </NewComment>
        </Container>
    );
};

export default Comments;