//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import Badge
import { Badge } from './components/Badge';
//import styles
import './styles.css';

//root const
const root = document.getElementById('app');

//render the app
render(
	<>
		<Badge color='red'>Hey</Badge>
	</>,
	root,
);
