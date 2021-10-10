import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App saludo='Buenas'>
			<h3>  Esto es contenido del props.children</h3>
		</App>	,
  document.getElementById('root')
);

