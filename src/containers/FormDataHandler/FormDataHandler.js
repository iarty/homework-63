import React, { Component } from "react";
import classes from "./FormDataHandler.module.css";
import Input from "../../components/Input/Input";
import { MDBBtn } from "mdbreact";
import axios from "../../axios/axios";
import TextArea from "../../components/TextArea/TextArea";
import RichTextEditor from "react-rte";

export default class FormDataHandler extends Component {
	state = {
		post: {
			date: new Date(),
			title: "",
			text: RichTextEditor.createEmptyValue()
		}
	};

	inputHandler = event => {
		const post = { ...this.state.post };
		post[event.target.name] = event.target.value;
		this.setState({ post });
	};

	textAreaHandler = text => {
		const post = { ...this.state.post };
		post.text = text;
		this.setState({ post });
	};

	sendData = () => {
		try {
			axios.post("/posts.json", this.state.post);
		} catch (error) {
			console.log("Error");
		}
		this.setState({ post: { title: "", text: "" } });
	};

	render() {
		const cls = [classes.FormDataHandler, "container"];
		return (
			<div className={cls.join(" ")}>
				<h1>Add new post</h1>
				<Input value={this.state.post.title} onChange={this.inputHandler} />
				<TextArea value={this.state.post.text} onChange={this.textAreaHandler} />
				<MDBBtn onClick={this.sendData}>Add</MDBBtn>
			</div>
		);
	}
}
