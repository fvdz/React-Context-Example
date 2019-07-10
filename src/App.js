import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<ThemeContextProvider>
				<Header />
				<Body />
				<Footer />
			</ThemeContextProvider>
		</AuthContextProvider>
	);
}

export default App;
