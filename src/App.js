import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './Components/Home';
import Individual from './Components/Individual';
import Corporate from './Components/Corporate';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/corporate" component={Corporate} />
				<Route path="/individual" component={Individual} />
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
