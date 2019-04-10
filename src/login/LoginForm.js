import React, { Component } from 'react';
import styled from "styled-components";
import image from "../logo.png";
import InputTextComp from '../Components/InputText/InputText';
// Put your code here
// Feel free to create more files with more components

const Logo = styled.img`
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
`;

const Text = styled.div`
    position: absolute;
    top: 50%;
    left: 50%
    font-size: 150%;
    transform: translate(-50%, -50%);
`

class LoginForm extends Component{
    state={
        inputValue:""
    }
    handleChange=()=>{
        console.log("change");
    }
    render(){
        return(
            <>
                
                <Text> We wish you a happy coding! </Text>
                <div>
                <InputTextComp 
                ariaLableText="Enter the username in the input Box"
                name="userNameInputBox"
                labelText="userName"
                domElementID="loginPageUser"
                inputType="text"
            />
            <InputTextComp 
                ariaLableText="Enter the password in the input Box"
                name="passwordInputBox"
                labelText="password"
                domElementID="userpassword"
                inputType="password"
            />
                </div>
            </>
        )
    }
}

export default LoginForm;