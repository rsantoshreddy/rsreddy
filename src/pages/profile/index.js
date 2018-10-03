"use strict";

import React from "react";

import Template from "../../common/templates/template";

export default class Profile extends Template {
	constructor(props) {
		super(props);
	}

	createBody() {
		// const Model = this.props.modelData;
		return (
			<div className="document-body-root">
				<div className="container">
					<div className="row">
						<div className="col-md-4">santosh</div>
						<div className="col-md-8">*</div>
					</div>
				</div>
			</div>
		);
	}
}
