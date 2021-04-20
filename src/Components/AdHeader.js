import React from "react";
import { Row } from "reactstrap";
import { IoMdSettings } from "react-icons/io";

const AdHeader = () => {
	return (
		<Row className="d-flex align-items-end justify-content-between bg-white px-5 py-5 fa-2x ads__header">
			<div className="mt-lg-5 fw-5">Apps</div>
			<IoMdSettings className="mt-lg-5 text-dull" />
		</Row>
	);
};

export default AdHeader;
