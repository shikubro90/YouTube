import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../img/channelsThumbnail.jpg'

const Container = styled.div`

`
const NewComment = styled.div`

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
                <Avatar im/>
                <InputComment/>
            </NewComment>
        </Container>
    );
};

export default Comments;