import React from "react";
import { Container, Spinner } from "reactstrap";

const Loader = () => {
	return (
		<Container
			fluid
			className="m-4 d-flex align-items-center justify-content-center"
		>
			<Spinner className="fa-lg" color="primary" />
		</Container>
	);
};

export default Loader;
