import React from 'react';
import './App.css';
import Clock from './components/Clock';
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Clock />
			</div>
		);
	}
}

export default App;
