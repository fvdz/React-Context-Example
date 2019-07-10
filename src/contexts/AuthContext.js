// contextprovider for authentication state.
import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
	state = {
		isAuthenticated: false,
		userName: null
	};
	authenticate = e => {
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
