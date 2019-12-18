import React, { Fragment } from "react";
import { MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

export default function Posts(props) {
	const date = new Date(props.date).toLocaleString("ru", {
		hour: "numeric",
		minute: "numeric",
		year: "numeric",
		month: "short",
		day: "numeric"
	});
	return (
		<Fragment>
			<li className='chat-message d-flex justify-content-between mb-4'>
				<MDBCard>
					<MDBCardBody style={{ width: 900 }}>
						<div>
							<strong className='primary-font'>Created on:</strong>
							<small className='pull-right text-muted'> {date}</small>
						</div>
						<hr />
						<h3>{props.title}</h3>
						<div className='mb-3 p-2'>{ReactHtmlParser(props.text.toString("html"))}</div>
						<NavLink to={"/posts/" + props.id}>
							<MDBBtn>Read More >>></MDBBtn>
						</NavLink>
					</MDBCardBody>
				</MDBCard>
			</li>
		</Fragment>
	);
}
