import React from "react";
import { Container, Row } from "reactstrap";
import { dataList } from "../utils/dataUtils";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const _renderDiv = (name, value) => {
	return (
		<div key={name} className="mr-5 my-2">
			<p className="fa-small m-0 p-0 fw-5">{name}</p>
			<p className="fa-lg m-0 p-0 fw-5">{value}</p>
		</div>
	);
};

const ColumnComponent = ({ adData }) => {
	return (
		<Row
			key={adData.id}
			className="mx-2 mx-lg-4 my-4 p-2 p-lg-4 rounded bg-white container__column"
		>
			<Container fluid className="d-flex align-items-start my-3">
				<div className="colorBox rounded" />
				<div className="ml-2">
					<p className="m-0 fa-lg fw-5">{adData.appName}</p>
					<p className="m-0 text-muted fa-small fw-5">{adData.publisherName}</p>
				</div>
				<Link
					to={{ pathname: `/ads/${adData.id}`, state: { adData } }}
					className="ml-auto"
				>
					<AiOutlineArrowRight className="h3 text-dull" />
				</Link>
			</Container>
			<Container fluid className="d-flex flex-wrap data__column">
				{dataList.map(data => _renderDiv(data.name, data.value))}
			</Container>
		</Row>
	);
};

export default ColumnComponent;
