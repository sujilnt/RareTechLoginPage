import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
const ButtonStyles = styled.div`
	background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: pointer;
	:hover {
		background: ${(props) => (!props.primary ? 'palevioletred' : 'white')};
		color: ${(props) => (!props.primary ? 'white' : 'palevioletred')};
	}
	:active {
		background: red;
	}
`;
const Button = (props) => {
	return (
		<Fragment>
			<ButtonStyles primary={props.primary}>{props.name}</ButtonStyles>
		</Fragment>
	);
};
export default Button;
