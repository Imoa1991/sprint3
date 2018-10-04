import React from 'react';
import HalfPage from './components/HalfPage';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<HalfPage>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris justo, fermentum a bibendum non, tempor in dui. Pellentesque libero ex, malesuada eget placerat non, condimentum id tortor. Maecenas at elit a diam pulvinar finibus fringilla eu dui. Nullam vel odio nec nibh lobortis iaculis. Nullam neque est, dignissim vitae orci a, interdum sagittis ante. Ut id commodo justo. Suspendisse pulvinar, est at tincidunt efficitur, tortor diam venenatis leo, ut auctor quam lectus vel massa.</p>
				</HalfPage>
				<HalfPage>
					<p>Donec ac interdum est, ut bibendum orci. Integer enim purus, posuere at faucibus sit amet, blandit nec purus. Fusce nec felis ac magna aliquam tincidunt. Maecenas hendrerit in est vel ultricies. Ut vel ipsum dapibus, fermentum tellus nec, auctor ipsum. Vestibulum suscipit magna sit amet lacinia suscipit. Cras porta dui odio, quis varius nisl mollis ac. Vivamus a eleifend felis. Sed vel quam massa. Mauris ac vulputate enim, a tempus lorem. Vivamus sed leo vehicula, bibendum velit vel, cursus leo. Proin molestie orci id orci rutrum egestas.</p>
				</HalfPage>
			</div>
		);
	}
}

export default App;
