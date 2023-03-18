import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Scheme from './pages/scheme';
import Footer from './components/footer'

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/scheme' element={<Scheme/>} />
		<Route path='/hospital' element={<hospital/>}/>
		{/* <Route path='/events' component={Events} /> */}
	</Routes>
	<Footer />
	</Router>
);
}

export default App;
