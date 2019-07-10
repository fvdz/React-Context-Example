import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Body = () => {
	return (
		<AuthContext.Consumer>
			{authContext => {
				return (
					<ThemeContext.Consumer>
						{themeContext => {
							const theme = themeContext.isLightTheme
								? 'lightBody'
								: 'darkBody';
							return (
								<div className={theme}>
									<button
										className={`${theme}Button`}
										onClick={authContext.authenticate}
									>
										{!authContext.isAuthenticated
											? 'Log In'
											: 'Log Out'}
									</button>
									{authContext.isAuthenticated ? (
										<button
											className={`${theme}Button`}
											onClick={themeContext.switchTheme}
										>
											{!themeContext.isLightTheme
												? 'Switch To Light Theme'
												: 'Switch To Dark Theme'}
										</button>
									) : (
										''
									)}
								</div>
							);
						}}
					</ThemeContext.Consumer>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default Body;
