require('babel/register');


var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/main.jsx'); // Our custom react component

ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));
