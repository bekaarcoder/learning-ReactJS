import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/IndecisionApp';
import './styles/style.css';


// default props
App.defaultProps = {
  options: []
};

ReactDOM.render(<App options={['This is an example. Remove this. Add another.']} />, document.getElementById('app'));