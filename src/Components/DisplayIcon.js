import React from "react";
import { Col } from "reactstrap";

const DisplayIcon = ({ image, Name }) => {
	return (
		<Col className="col-6">
			<img height="40px" src={image} alt={Name} />
			<p className="my-2">{Name}</p>
		</Col>
	);
};

export default DisplayIcon;
