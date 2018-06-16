import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

window.React = React;
window.ReactDOM = ReactDOM;
window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));

import '../scss/test.scss';
