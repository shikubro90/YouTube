import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../img/'

const Container = styled.div`

`
const NewComment = styled.div`

`

const Avatar = styled.img`
    
`
const InputComment = styled.input`
    
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar/>
                <InputComment/>
            </NewComment>
        </Container>
    );
};

export default Comments;