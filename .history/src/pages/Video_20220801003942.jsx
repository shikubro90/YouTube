import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlined  from '@mui/icons-material/ReplyOutlined';
import  AddTaskOutlined  from '@mui/icons-material/AddTaskOutlined';


const Container = styled.div`
    display: flex;
    gap: 24px;
`;

const Content = styled.div`
    flex: 5;
`


const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.text};
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.span`
    color: ${({theme})=>theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({theme})=>theme.text};
`
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

`

const VideWrapper = styled.div`
 
 
`

const Recommendation = styled.div`
    flex: 2;
`

const Hr = styled.hr`
    margin: 15px 0;
    border  : 0.5 px solid ${({theme})=>theme.textSoft};
`;


const Channel = styled.div`
    display  : flex;
    justify-content: space-between;
`;

const ChannelInfoWrapper = styled.div`
    
`
const ChannelInfo = styled.div`
    
`

const SubscribeButton = styled.button`
    
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme})=>theme.textSoft};
    margin: 9px 0px;
`
const ChannelCounter = styled.div`
    
`;

const ChannelDescription = styled.div`
      
`;

const Video = () => {
    return (
        <Container>
            <Content>
                <VideWrapper>
                    <iframe width="100%" 
                        height="720" src="https://www.youtube.com/embed/yIaXoop8gl4" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>    
                    </iframe>
                </VideWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>23,139 viewsJun 30, 2022</Info>
                    <Buttons>
                        <Button><ThumbUpOutlinedIcon/>123</Button>
                        <Button><ThumbDownOutlinedIcon/></Button>
                        <Button><ReplyOutlined/></Button>
                        <Button><AddTaskOutlined/></Button>
                    </Buttons>
                </Details>
                <Hr/>

                <Channel>
                    <ChannelInfoWrapper>
                        <
                    </ChannelInfoWrapper>
                    <SubscribeButton>SUBSCRIBE</SubscribeButton>
                </Channel>

            </Content>

            <Recommendation>
                Recommendation
            </Recommendation>
        </Container>
    );
};

export default Video;