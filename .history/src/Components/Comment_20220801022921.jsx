import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display    :flex ;
    gap: 10px;
    margin: 30px 0;
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const CommentsDetails = styled.div`

`


const Comment = () => {
    return (
        <Container>
            Comment
        </Container>
    );
};

export default Comment;