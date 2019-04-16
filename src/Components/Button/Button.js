import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
const ButtonStyles = styled.div`
	background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
	font-size: 1em;
	margin: 1em;
	padding: 0.70em 5em;
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
			<Link to={props.href} style={{ textTransform: 'capitalize', textDecoration: 'none' }}>
				<ButtonStyles primary={props.primary}>{props.name}</ButtonStyles>
			</Link>
		</Fragment>
	);
};
export default Button;
