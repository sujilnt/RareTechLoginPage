import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button.js';
const Container = styled.div` ,; 
    display:flex;
    justify-content:space-around;
    width:100%;
    margin: 20px 0;
`;

const FormButton = () => {
	return (
		<Container>
			<Button name="sign up" href="/sign up" primary={true} />
			<Button name="login " href="/login" />
		</Container>
	);
};

export default FormButton;
