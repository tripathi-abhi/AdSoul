import React from "react";
import { Container, Row } from "reactstrap";
import statsImage from "../assets/svgs/asset1.svg";
import fillrate from "../assets/svgs/icon1.svg";
import improvectr from "../assets/svgs/icon2.svg";
import refresh from "../assets/svgs/icon3.svg";
import integration from "../assets/svgs/icon4.svg";
import DisplayIcon from "./DisplayIcon";

const AdsSection = () => {
	return (
		<section className="p-0 m-0 text-white adsSection">
			<Container fluid className="p-4 text-center statsSection">
				<img src={statsImage} alt="jumbo__image" />
			</Container>
			<Container fluid className="p-5 d-none d-lg-block optimizationSection">
				<p className="py-3 fa-2x">Revenue Optimization</p>
				<Row className="my-4">
					<DisplayIcon image={fillrate} Name={"Fill Rate"} />
					<DisplayIcon image={improvectr} Name={"Improve CTR"} />
				</Row>
				<Row>
					<DisplayIcon image={refresh} Name={"Refresh Rate"} />
					<DisplayIcon image={integration} Name={"Quick Integration"} />
				</Row>
			</Container>
		</section>
	);
};

export default AdsSection;
