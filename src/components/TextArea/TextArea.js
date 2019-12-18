import React, { Component } from "react";
import RichTextEditor from "react-rte";

export default class MyStatefulEditor extends Component {
	state = {
		richValue: RichTextEditor.createEmptyValue(),
		htmlValue: this.props.text
	};

	componentWillReceiveProps(newProps) {
		if (newProps.text !== this.state.htmlValue) {
			this.setState({
				richValue: RichTextEditor.createValueFromString(newProps.text, "html"),
				htmlValue: newProps.text
			});
		}
	}

	onChange = richValue => {
		console.log(richValue);
		this.setState({ richValue, htmlValue: richValue.toString("html") });
		if (this.props.onChange) {
			this.props.onChange(this.state.htmlValue);
		}
	};

	render() {
		return <RichTextEditor name='text' value={this.state.richValue} onChange={this.onChange} />;
	}
}
