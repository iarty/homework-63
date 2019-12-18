import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import { NavLink } from "react-router-dom";
import axios from "../../axios/axios";
import ReactHtmlParser from "react-html-parser";
import { Lines } from "react-preloaders";

export default class FullPost extends Component {
	state = {
		post: {},
		loading: true
	};

	async componentDidMount() {
		try {
			const response = await axios.get(`/posts/${this.props.match.params.id}.json`);
			const post = response.data;
			this.setState({ post, loading: false });
		} catch (error) {
			console.log(error);
		}
	}

	deletePost = async () => {
		await axios.delete(`/posts/${this.props.match.params.id}.json`);
		this.props.history.push("/");
	};

	render() {
		const date = new Date(this.state.post.date).toLocaleString("ru", {
			hour: "numeric",
			minute: "numeric",
			year: "numeric",
			month: "short",
			day: "numeric"
		});
		return (
			<div className='container d-flex justify-content-center'>
				<div className='mt-5'>
					<div className='chat-message d-flex justify-content-between mb-4'>
						<MDBCard>
							<MDBCardBody style={{ width: 900 }}>
								<div>
									<strong className='primary-font'>Created on:</strong>
									<small className='pull-right text-muted'> {date}</small>
								</div>
								<hr />
								<h3>{this.state.post.title}</h3>
								<div className='mb-3 p-2'>{ReactHtmlParser(this.state.post.text)}</div>
								<div className='text-right'>
									<NavLink to={`/posts/${this.props.match.params.id}/edit`}>
										<MDBBtn color='info'>Edit</MDBBtn>
									</NavLink>
									<MDBBtn color='danger' onClick={this.deletePost}>
										Delete
									</MDBBtn>
								</div>
							</MDBCardBody>
						</MDBCard>
					</div>
				</div>
				<Lines customLoading={this.state.loading} />
			</div>
		);
	}
}
