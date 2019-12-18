import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Contacts from "./containers/Contacts/Contacts";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import FormDataHandler from "./containers/FormDataHandler/FormDataHandler";
import FullPost from "./containers/FullPost/FullPost";

export default function App() {
	return (
		<div>
			<Navigation />
			<Switch>
				<Route path='/about' component={About}></Route>
				<Route path='/contacts' component={Contacts}></Route>
				<Route path='/posts/add' render={props => <FormDataHandler {...props} />}></Route>
				<Route
					path='/posts/:id/edit'
					render={props => <FormDataHandler {...props} headline='Edit post' btn='Edit' />}
				></Route>
				<Route path='/posts/:id' component={FullPost}></Route>
				<Route path={"/" || "/posts"} component={Home}></Route>
			</Switch>
		</div>
	);
}
