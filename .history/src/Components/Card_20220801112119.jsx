import React from 'react';
import styled from 'styled-components';
import youtubeThumbnail from '../img/youtubeapp.png'
import channelsThumbnail from '../img/channelsThumbnail.jpg'
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 350px;
    margin-bottom: 45px;
    cursor: pointer;
    display: ${};
`;

const Image = styled.img`
    height: 202px;
    width: 100%;
    background-color: #999;
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;

const DetailsText = styled.div`
    padding: 0px 10px;
`
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme})=>theme.text};
`
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme})=>theme.textSoft};
    margin: 9px 0px;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({theme})=>theme.textSoft};

`

const Card = ({type}) => {
    return (
        <Link to="video/test" style={{textDecoration: "none", color: "inherit"}}> 
            <Container type={type}>
                <Image src={youtubeThumbnail}/>
                <Details>
                    <ChannelImage src={channelsThumbnail}/>
                    <DetailsText>
                        <Title>Test Video</Title>
                        <ChannelName  >ShikuTube</ChannelName>
                        <Info>660, 908 view . 1 day ago</Info>
                    </DetailsText>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;