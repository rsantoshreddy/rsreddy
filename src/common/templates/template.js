import React from "react";

export default class Template extends React.Component {
	/**
	 *
	 * [createBody description]
	 * This is the method that sub classes should override to return the markup
	 * for the page main area.
	 *
	 * @return {[type]} [description]
	 */
	createBody() {
		return "";
	}

	/**
	 * [render description]
	 * @return {[type]} [description]
	 */
	render() {
		return <div id="document-body">{this.createBody()}</div>;
	}
}
