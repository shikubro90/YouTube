import React from 'react';
import styled from 'styled-components';
import Avatar from '../img/channelsThumbnail.jpg'

const Container = styled.div`
    display    :flex ;
    gap: 10px;
    margin: 30px 0;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;
const ChannelDetails = styled.i
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme})=>theme.text};
    margin: 0px 0px;
`
const ChannelCounter = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

const Comment = () => {
    return (
        <Container>
            <ChannelImage src={Avatar}/>

        </Container>
    );
};

export default Comment;