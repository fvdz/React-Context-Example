import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: false,
		light: { background: '#ccc', color: '#333' },
		dark: { background: '#444', color: '#aaa' }
	};
	switchTheme = e => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};
	render() {
		return (
			<ThemeContext.Provider
				value={{ ...this.state, switchTheme: this.switchTheme }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
