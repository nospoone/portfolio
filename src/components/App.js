import React from 'react';
import TopBar from './top-bar';
import Home from './home';
import Clients from './clients';
import About from './about';
import Footer from './footer';

function App() {
	return (
		<>
			<TopBar/>
			<Home/>
			<Clients/>
			<About/>
			<Footer/>
		</>
	);
}

export default App;
