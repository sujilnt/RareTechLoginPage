import React, { Component } from 'react';
import LoginForm from './login/LoginForm.js';
import { HashRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CreateUser from './Components/CreateUser/CreateUser';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" render={() => <LoginForm />} />
					<Route
						exact
						path="/signup"
						render={() => {
							return (
								<div>
									<CreateUser />
								</div>
							);
						}}
					/>
					<Route exact path="/login" />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
