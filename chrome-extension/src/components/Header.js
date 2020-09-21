import React from 'react';
import styled from 'styled-components';
import Logo from '../resource/opuscout_logo_white.svg';
import { FaTimes } from "react-icons/fa";

const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background: #2B2CFF;

    .logo {
        margin: auto 10px;
        width: 30px;
        height: 30px;
    }
    
    .app-name {
        color: #ffffff;
        font-size: 25px;
        font-weight: bold;
        margin: auto 0px;
    }

    .menu {
        margin: auto 0px;
        margin-left: 30px;
        font-weight: bold;
        color: #ffffff;
    }

    .logout {
        background: black;
        margin: auto 0px;
        color: #ffffff;
    }

    .cancel {
        background: black;
        margin: auto 0px;
        margin-left: 15px;
        color: #ffffff;
    }
`;

function Header() {
    return(
        <HeaderStyle>
            <img src={Logo} alt="OPUSCOUT LOGO Image" className="logo"></img>
            <div className="app-name">OPUSCOUT</div>
            <div className="menu">아이템 발굴</div>
            <div className="logout">로그아웃</div>
            <FaTimes className="cancel"></FaTimes>
        </HeaderStyle>
    )
}

export default Header;