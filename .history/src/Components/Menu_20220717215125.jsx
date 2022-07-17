import React from 'react';
import styled from 'styled-components';
import logo from '../img/youtubelogo.png'

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1;
  background: #202020;
  color: white;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Item = styled.div`
  display  : flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  padding: 7.5px 0;
`;

const Image = styled.img`
    width: 35px;
    height: 25px;
    
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid #373737;
`;


const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Image src={logo}/>
                    ShikuTube
                </Logo>
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon/>
                    Subscription
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlinedIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon/>
                    History
                </Item>
                
                <Item>
                    <LibraryMusicOutlinedIcon/>
                    Music
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon/>
                    Sports
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon/>
                    Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon/>
                    Movie
                </Item>
                <Item>
                    <ArticleOutlinedIcon/>
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon/>
                    Live
                </Item>
                <Item>
                    <SettingsOutlinedIcon/>
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon/>
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon/>
                    Help
                </Item>
                <Item>
                    <SettingsBrightnessOutlinedIcon/>
                    Light Mode
                </Item>
            </Wrapper>
        </Container>
    );
};

export default Menu;