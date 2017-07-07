var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./../node_modules/bootstrap/dist/css/bootstrap-reboot.css');
require('./../node_modules/bootstrap/dist/css/bootstrap-grid.css');
require('./index.css');
 
ReactDOM.render( 
    <App />,
    document.getElementById('app')
);