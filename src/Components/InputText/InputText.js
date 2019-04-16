import React, { Fragment, Component } from 'react';
import styled from 'styled-components/macro';
const BasetyledInput = styled.input`
	padding: .55rem;
	/*margin: 0.5em;*/
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	font-size: 18px;
	cursor: text;
`;

const LabelText = styled.label`
	display: block;
	text-transform: capitalize;
	font-weight: bold;
	margin: 10px 0px 5px 0px;
`;
const InputTextComp = (props) => {
	const { ariaLableText, name, labelText, domElementID, inputType } = props;
	return (
		<Fragment>
			<LabelText htmlFor={domElementID}>{labelText}</LabelText>
			<BasetyledInput
				onChange={(e) => props.onhandleChange(e)}
				type={inputType}
				aria-label={ariaLableText}
				aria-required="true"
				name={name}
				id={domElementID}
			/>
		</Fragment>
	);
};
export default InputTextComp;
