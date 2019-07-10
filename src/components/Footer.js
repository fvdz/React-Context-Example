import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
	return (
		<ThemeContext.Consumer>
			{themeContext => {
				const themeLink = themeContext.isLightTheme
					? 'nav-link light'
					: 'nav-link dark';
				return (
					<ul
						className={
							themeContext.isLightTheme
								? 'nav bg-light light'
								: 'nav bg-dark dark'
						}
					>
						<li className="nav-item">
							<a className={`nav-link ${themeLink}`} href="!#">
								Active
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${themeLink}`} href="!#">
								Link
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${themeLink}`} href="!#">
								Link
							</a>
						</li>
					</ul>
				);
			}}
		</ThemeContext.Consumer>
	);
};

export default Footer;
