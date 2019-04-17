import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button.js';
const Container = styled.div` ,; 
    display:flex;
    justify-content:space-around;
    width:100%;
    margin: 20px 0;
`;

const FormButton = (props) => {
	return (
		<Container>
			<Button name="sign up" href="/signup" primary={true} />
			<Button
				name="login "
				href="/loginsuccess"
				onClick={props.onClicklogin}
				style={props.disabled ? { pointerEvents: 'none' } : {}}
			/>
		</Container>
	);
};

export default FormButton;
