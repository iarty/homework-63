import React from "react";
import { MDBInput } from "mdbreact";

const InputPage = props => {
	return (
		<MDBInput name='title' label='Title' value={props.value} onChange={props.onChange} required />
	);
};

export default InputPage;
