import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../resource/opuscout_logo_white.svg';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack
  } from 'react-chrome-extension-router';
import Item from './Item';
import { loginAPI } from '../api/api';
import { useAccessDispatch, useAccessState } from '../provider/MainProvider';

function Login() {
    // state, dispatch scope
    const accessState = useAccessState();
    const accessDispatch = useAccessDispatch();
    const [{id, password}, setLoginInfo] = useState({id: "", password: ""})

    useEffect(() => {
        accessDispatch({
            type: 'ACCESS_RESET'
        })
        loginAPI(id, password, accessDispatch)
    }, [id, password])
    
    var tmpId = '';
    var tmpPassword = '';
    const onIdChange = (e) => {
        tmpId = e.target.value;

    }
    const onPasswdChange = (e) => {
        tmpPassword = e.target.value;
    }
    const onLoginClick = () => {

        setLoginInfo({id: tmpId, password: tmpPassword})
        if(tmpId != '') {
            /* eslint-disable no-undef */
            chrome.runtime.sendMessage({action: "FINISH"}, function() { 
                alert("로그인 성공!"); 
                goTo(Item)
            })
            /* eslint-enable no-undef */
        }else{
            /* eslint-disable no-undef */
            chrome.runtime.sendMessage({action: "FINISH"}, function() { 
                alert("로그인 정보를 입력하세요."); 
            })
            /* eslint-enable no-undef */
        }
        
    }

    if(accessState.login.status === "success"){
        goTo(Item)
    }else{
        console.log('login failed')
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