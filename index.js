var React = require('react');
var ReactDOM = require('react-dom');
 
class MyComponent extends React.Component {
	render() {
		return <div>Hello World</div>;
	}
}

function load() {
	ReactDOM.render(<MyComponent />, document.getElementsByTagName('body').item(0));
}

// Wait for the DOM.
if (document.readyState === 'loading')
	document.addEventListener('DOMContentLoaded', load);
else
	load();
