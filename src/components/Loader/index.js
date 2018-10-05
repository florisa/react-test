import React from 'react';
import loaderScr from '../../assets/loader.gif';
const Loader = props => (
	<div>
		<img
			style = {{ width:75 }}
			alt = "Loader Icon"
			scr = {loaderScr} />
	</div>
	)

export default Loader;