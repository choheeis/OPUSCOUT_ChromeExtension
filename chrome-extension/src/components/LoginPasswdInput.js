import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
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

function LoginPasswdInput({type, hint}) {
    var inputType = '';
    if(type === "id") {
        inputType = "id"
    } else if (type === "password") {
        inputType = "password"
    }
    return(
        <InputStyle placeholder={hint} type={inputType}></InputStyle>
    )
}

export default LoginPasswdInput;