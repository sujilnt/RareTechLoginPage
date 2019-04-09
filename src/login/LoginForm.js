import React, { Component } from 'react';
import styled from "styled-components";
import image from "../logo.png";
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

class LoginForm extends React.Component{
    
    render(){
        return(
            <>
                <Logo src={image}/>
                <Text> We wish you a happy coding! </Text>
            </>
        )
    }
}

export default LoginForm;