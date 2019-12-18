import React, { Component } from "react";
import classes from "./FormDataHandler.module.css";
import Input from "../../components/Input/Input";
import { MDBBtn } from "mdbreact";
import axios from "../../axios/axios";
import TextArea from "../../components/TextArea/TextArea";
import { Lines } from "react-preloaders";

export default class FormDataHandler extends Component {
	state = {
		post: {
			date: new Date(),
			title: "",
			text: ""
		},
		loading: false
	};

	async componentDidMount() {
		if (this.props.match.params.id) {
			this.setState({ loading: true });
			const response = await axios.get(`posts/${this.props.match.params.id}.json`);
			const post = response.data;
			this.setState({ post, loading: false });
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.setState({
				post: {
					date: new Date(),
					title: "",
					text: ""
				}
			});
		}
	}

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

	sendData = async () => {
		try {
			await axios.post("/posts.json", this.state.post);
		} catch (error) {
			console.log("Error");
		}
		this.setState({ post: { title: "", text: "" } });
		this.props.history.push("/");
	};

	updateData = async () => {
		await axios.put(`/posts/${this.props.match.params.id}.json`, this.state.post);
		this.props.history.push("/");
	};

	render() {
		const cls = [classes.FormDataHandler, "container"];
		return (
			<div className={cls.join(" ")}>
				<h1>{this.props.headline ? this.props.headline : "Add new post"}</h1>
				<Input value={this.state.post.title} onChange={this.inputHandler} />
				<TextArea text={this.state.post.text} onChange={this.textAreaHandler} />
				<MDBBtn onClick={this.props.btn ? this.updateData : this.sendData}>
					{this.props.btn ? this.props.btn : "Add"}
				</MDBBtn>
				<Lines customLoading={this.state.loading} />
			</div>
		);
	}
}
