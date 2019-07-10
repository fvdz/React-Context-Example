import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Header extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{authContext => {
					console.log(authContext);
					return (
						<ThemeContext.Consumer>
							{themeContext => {
								// console.log(themeContext);
								const themeNavClass = themeContext.isLightTheme
									? 'navbar navbar-expand-lg navbar-light bg-light'
									: 'navbar navbar-expand-lg navbar-dark bg-dark';
								return (
									<nav className={themeNavClass}>
										<a className="navbar-brand" href="!#">
											{authContext.isAuthenticated
												? `Welkom ${authContext.userName}`
												: 'Welkom'}
										</a>
										<button
											className="navbar-toggler"
											type="button"
											data-toggle="collapse"
											data-target="#navbarNavAltMarkup"
											aria-controls="navbarNavAltMarkup"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span className="navbar-toggler-icon" />
										</button>
										<div
											className="collapse navbar-collapse"
											id="navbarNavAltMarkup"
										>
											<div className="navbar-nav">
												<a
													className="nav-item nav-link active"
													href="!#"
												>
													Home{' '}
													<span className="sr-only">
														(current)
													</span>
												</a>
												<a className="nav-item nav-link" href="!#">
													Features
												</a>
												<a className="nav-item nav-link" href="!#">
													Pricing
												</a>
											</div>
										</div>
									</nav>
								);
							}}
						</ThemeContext.Consumer>
					);
				}}
			</AuthContext.Consumer>
		);
	}
}

export default Header;
