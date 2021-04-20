import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import { formatToValue, toDate } from "../Helpers/helperFunctions";

const DataTable = ({ singleAdData, handleModal }) => {
	return (
		<Container fluid className="fw-5 py-2 mt-5 container__dataTable">
			<Row className="my-2 px-4 py-3 text-black">
				<Col>Date</Col>
				<Col className="d-none d-sm-flex justify-content-end">Revenue</Col>
				<Col className="d-none d-lg-flex justify-content-end">Ad Request</Col>
				<Col className="d-none d-lg-flex justify-content-end">Ad Response</Col>
				<Col className="d-none d-lg-flex justify-content-end">Impressions</Col>
				<Col className="d-none d-lg-flex justify-content-end">Clicks</Col>
				<Col className="d-none d-sm-flex justify-content-end text-nowrap">
					Render Rate
				</Col>
				<Col className="d-flex d-lg-none justify-content-end">More</Col>
			</Row>
			{singleAdData.map((adDetails, index) => (
				<Row key={index} className="text-muted px-4 py-2">
					<Col>{toDate(adDetails.date)}</Col>
					<Col className="d-none d-sm-flex justify-content-end">
						${formatToValue(adDetails.revenue)}
					</Col>
					<Col className="d-none d-lg-flex justify-content-end">
						{formatToValue(adDetails.adRequest)}
					</Col>
					<Col className="d-none d-lg-flex justify-content-end">
						{formatToValue(adDetails.adResponse)}
					</Col>
					<Col className="d-none d-lg-flex justify-content-end">
						{formatToValue(adDetails.impressions)}
					</Col>
					<Col className="d-none d-lg-flex justify-content-end">
						{formatToValue(adDetails.clicks)}
					</Col>
					<Col className="d-none d-sm-flex justify-content-end">
						{Math.floor((adDetails.clicks * 100) / adDetails.adResponse)}%
					</Col>
					<Col className="d-flex d-lg-none justify-content-end">
						<FiMoreHorizontal onClick={() => handleModal(adDetails)} />
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default DataTable;
