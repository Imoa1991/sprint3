import React from 'react';
import './App.css';
import SheepCounter from './components/SheepCounter';
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<SheepCounter />
			</div>
		);
	}
}

export default App;
