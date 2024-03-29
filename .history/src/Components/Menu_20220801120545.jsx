import React from 'react';
import styled from 'styled-components';
import logo from '../img/youtubelogo.png'
import {Link} from 'react-router-dom'

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
  background-color: ${({theme})=>theme.bgLighter};
  color: ${({theme})=>theme.text};
  height: 100vh;
  overflow: auto;
  font-size: 14px;
  position: sticky;
  transition: all 400ms ease;
  top: 0px;
  ::-webkit-scrollbar {
     display: none;
    }
  ::-webkit-scrollbar-track {
    background-color: ${({theme})=>theme.bg};

    };
  ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
        height: 100px;
    };
    &:hover{
        ::-webkit-scrollbar {
        display: block;
        width: 10px;
        
    }
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    display: block;
    };

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
    color: ${({theme})=>theme.text};
`;

const Item = styled.div`
  display  : flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  padding: 7.5px 5px;

  &:hover{
    background-color: ${({theme})=>theme.soft};
    border-radius: 5px;
  }
`;

const Image = styled.img`
    width: 35px;
    height: 25px;
    
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`;

const Login = styled.div`

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

const SmallTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`;




const Menu = ({darkMode,setDarkMode}) => {
    return (

        <Container>
            <Wrapper>
                <Link to="/" style={{textDecoraton : "none !important" }}>
                    <Logo>
                        <Image src={logo}/>
                        ShikuTube
                    </Logo>
                </Link>

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

                <Hr/>

                <Login>
                    Sign in to like video, comment and subscribe.
                    <Link to=>
                        <Button><AccountCircleOutlinedIcon/> SIGN IN</Button>
                    </Link>
                </Login>

                <Hr/>
                <SmallTitle>
                    BEST PART OF SHIKU TUBE
                </SmallTitle>

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
                <Hr/>
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
                <Item onClick={()=>setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon/>
                    {darkMode ? "Light" : "Dark"} Mode
                </Item> 
            </Wrapper>
        </Container>
    );
};

export default Menu;