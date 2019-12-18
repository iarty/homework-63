import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse
} from "mdbreact";

const links = [
	{ to: "/", label: "", exact: true },
	{ to: "/posts/add", label: "Add", exact: false },
	{ to: "/about", label: "About", exact: false },
	{ to: "/contacts", label: "Contacts", exact: false }
];

class NavbarPage extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarBrand>
					<MDBNavLink to="/">
            <strong className='white-text'>Arty Blog</strong>
          </MDBNavLink>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav right>
						{links.map((link, index) => {
							return (
								<MDBNavItem key={index}>
									<MDBNavLink to={link.to} exact={link.exact}>
										{link.label}
									</MDBNavLink>
								</MDBNavItem>
							);
						})}
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;
