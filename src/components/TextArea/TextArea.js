import React, { Component } from "react";
import RichTextEditor from "react-rte";

export default class MyStatefulEditor extends Component {
	static getDerivedStateFromProps(props, state) {
		console.log(props, state);
		if (props.text !== state.htmlValue) {
			return {
				richValue: RichTextEditor.createValueFromString(props.text, "html"),
				htmlValue: props.text
			};
		}
		return null;
	}

	state = {
		richValue: RichTextEditor.createEmptyValue(),
		htmlValue: this.props.text
	};

	onChange = richValue => {
		this.setState({ richValue, htmlValue: richValue.toString("html") }, () => {
			this.props.onChange(this.state.htmlValue);
		});
	};

	render() {
		return <RichTextEditor name='text' value={this.state.richValue} onChange={this.onChange} />;
	}
}
