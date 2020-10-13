//import react
import React from 'react';
//import styles
import '../../components styles/badge.css'

//create and export badge component
export const Badge = ({ children, ...props }) => (
	<span className={`badge ${props?.color}`} {...props}>{children}</span>
);
