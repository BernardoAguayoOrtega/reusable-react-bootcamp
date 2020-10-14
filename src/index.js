//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import Badge
import { Badge } from './components/Badge';
//import count
import { Count } from './components/Count';
//import styles
import './styles.css';

//root const
const root = document.getElementById('app');

//render the app
render(
	<>
		<h1>Check out these badges!</h1>
		<Badge color='green'>Success</Badge> This is operational. <br />
		<Badge color='red'>Removed</Badge> This is critical. <br />
		<Badge color='yellow'>Warning</Badge> This is a warning. <br />
		<Badge color='blue'>Beta</Badge> This is in progress. <br />
		<Count />
	</>,
	root,
);
