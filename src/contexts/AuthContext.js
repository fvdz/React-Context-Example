// contextprovider for authentication state.
import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
	state = {
		isAuthenticated: false,
		userName: null
	};
	authenticate = e => {
		// commented out because this does not have any function if your not
		// use any kind of form validation. When there is really something to
		// validate through username / password then the prevent behaviour has
		// is neccesary to validate the values before submitting the form.
		//e.preventDefault();
		this.setState({
			isAuthenticated: !this.state.isAuthenticated,
			userName: !this.state.isAuthenticated ? 'Frans' : null
		});
	};
	render() {
		return (
			<AuthContext.Provider
				value={{ ...this.state, authenticate: this.authenticate }}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export default AuthContextProvider;
