import React, { Component } from "react";
import RichTextEditor from "react-rte";

export default class MyStatefulEditor extends Component {
	state = {
		value: this.props.value
	};

	onChange = value => {
		this.setState({ value });
		if (this.props.onChange) {
			this.props.onChange(value.toString("html"));
		}
	};

	render() {
		return <RichTextEditor name='text' value={this.state.value} onChange={this.onChange} />;
	}
}
