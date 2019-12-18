import React, { Component } from "react";
import Posts from "../../components/Posts/Posts";
import axios from "../../axios/axios";

export default class Home extends Component {
	state = {
		posts: []
	};

	async componentDidMount() {
		try {
			const response = await axios.get("/posts.json");
			const posts = [];
			Object.keys(response.data).forEach(key => {
				posts.push({
					id: key,
					...response.data[key]
				});
			});
			this.setState({ posts });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<div className='container mt-5'>
				<ul className='d-flex flex-column align-items-center'>
					{this.state.posts.map((post, index) => (
						<Posts key={index} id={post.id} date={post.date} title={post.title} text={post.text} />
					))}
				</ul>
			</div>
		);
	}
}
