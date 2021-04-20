import React from "react";
import { Col, Container, Row } from "reactstrap";
import AdHeader from "../Components/AdHeader";
import AdsColumns from "../Components/AdsColumns";
import AdsSection from "../Components/AdsSection";
import NavbarComponent from "../Components/Navbar";

const HomePage = () => {
	return (
		<Container fluid className="p-0 m-0 container__main">
			<Row className="p-0 m-0">
				<Col className="col-12 col-lg-6 p-0 m-0">
					<NavbarComponent />
					<AdsSection />
				</Col>
				<Col className="col-12 col-lg-6 column__apps text-black">
					<AdHeader />
					<AdsColumns />
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
