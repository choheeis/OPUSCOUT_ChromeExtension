import React from 'react';
import styled from 'styled-components';
import Logo from '../resource/opuscout_logo_white.svg';
import { FaUserAlt, FaLock } from "react-icons/fa";

const ContentSection = styled.div`
    width: 100%;
    height: 250px;
    background: #2B2CFF;
    position: relative;

    .chrome-extension-title-container {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        bottom: 0;
        height: 40px;
        margin: 20px auto;
    }
    
    .title {
        margin: auto 0;
        margin-left: 10px;
        color: white;
        font-size: 30px;
        font-weight: bold;
    }
`;

const LoginSection = styled.div`
    width: 100%;
    height: 350px;
    background: #ffffff;
    padding-top: 30px;

    .login-container {
        width: 238px;
        margin: 0 auto;
    }

    .login-input-container {
        display: flex;
        margin-top: 15px;
    }

    .user-icon {
        margin: auto 0;
        font-size: 28px;
        color: #2B2CFF;
    }
`;

const Input = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: solid 1px #2B2CFF;
    padding: 1.0rem;
    box-sizing: border-box;
    font-size: 15px;
    margin-left: 10px;
    outline: none;
`;

const LoginButton = styled.div`
    float: right;
    width: 200px;
    height: 40px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2B2CFF;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        // 커서 호버시 연한 파란색
        background: #001aec;
    }
    &:active {
        // 클릭시 어두운 파란색
        background: #2353FF;
    }
`;

function Login() {
    var id = '';
    var password = '';
    const onIdChange = (e) => {
        id = e.target.value;
    }

    const onPasswdChange = (e) => {
        password = e.target.value;
    }
    const onLoginClick = () => {
        console.log(id);
        console.log(password);
    }

    return(
        <>
            <ContentSection>
                <div className="chrome-extension-title-container">
                    <img src={Logo} alt="로고이미지"></img>
                    <div className="title">OPUSCOUT</div>
                </div>
            </ContentSection>
            <LoginSection>
                <div className="login-container">
                    <div className="login-input-container">
                        <FaUserAlt className="user-icon"></FaUserAlt>
                        <Input onChange={onIdChange} placeholder="id" type="id"></Input>
                    </div>
                    <div className="login-input-container">
                        <FaLock className="user-icon"></FaLock>
                        <Input onChange={onPasswdChange} placeholder="**********" type="password"></Input>
                    </div>
                    <LoginButton onClick={onLoginClick}>로그인</LoginButton>
                </div>
            </LoginSection>
        </>
    )
}

export default Login;