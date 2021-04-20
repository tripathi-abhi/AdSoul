import React, { useEffect, useRef, useState } from "react";
import DataTable from "../Components/DataTable";
import NavbarComponent from "../Components/Navbar";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col, Container, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { formatToValue, toDate } from "../Helpers/helperFunctions";
import Loader from "../Components/Loader";

const AdInfoPage = ({ location }) => {
	const [singleAdData, setSingleAdData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalInfo, setModalInfo] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const { adData } = location.state;

	const fetchSingleAd = useRef(() => {});

	fetchSingleAd.current = async () => {
		return await axios.get(`https://api.npoint.io/baf8dba5974d29aa094b/${id}`);
	};

	useEffect(() => {
		fetchSingleAd
			.current()
			.then(({ data }) => {
				setSingleAdData(data);
				console.log(data);
			})
			.catch(err => alert(err.message))
			.finally(() => setLoading(false));
	}, []);

	const handleModal = data => {
		if (isModalOpen) {
			setModalInfo({});
			return setIsModalOpen(false);
		}
		setModalInfo(data);
		setIsModalOpen(true);
	};

	const _renderModalBody = () => {
		return (
			<ModalBody>
				<Row className="m-2">
					<Col className="fw-6">Date</Col>
					<Col>{modalInfo.date && toDate(modalInfo.date)}</Col>
				</Row>
				<Row className="m-2">
					<Col className="fw-6">Revenue</Col>
					<Col>${modalInfo.revenue && formatToValue(modalInfo.revenue)}</Col>
				</Row>
				<Row className="m-2">
					<Col className="fw-6">Ad Requests</Col>
					<Col>{modalInfo.adRequest && formatToValue(modalInfo.adRequest)}</Col>
				</Row>
				<Row className="m-2">
					<Col className="fw-6">Ad Responses</Col>
					<Col>
						{modalInfo.adResponse && formatToValue(modalInfo.adResponse)}
					</Col>
				</Row>
				<Row className="m-2">
					<Col className="fw-6">Impressions</Col>
					<Col>
						{modalInfo.impressions && formatToValue(modalInfo.impressions)}
					</Col>
				</Row>
				<Row className="m-2">
					<Col className="fw-6">Clicks</Col>
					<Col>{modalInfo.clicks && formatToValue(modalInfo.clicks)}</Col>
				</Row>
				<Row className="m-2">
					<Col className="fw-6">Render Rates</Col>
					<Col>
						{Math.floor((modalInfo.clicks * 100) / modalInfo.adResponse)}%
					</Col>
				</Row>
			</ModalBody>
		);
	};

	return (
		<>
			<Modal isOpen={isModalOpen} style={{ top: "40px" }}>
				<ModalHeader toggle={() => setIsModalOpen(false)}>
					More Info
				</ModalHeader>
				{_renderModalBody()}
			</Modal>
			<NavbarComponent />
			<Container fluid className="p-4">
				<Container fluid className="d-flex p-0 align-items-center my-3">
					<Link to="/" className="mr-4">
						<AiOutlineArrowLeft className="h3 text-dull" />
					</Link>
					<div className="d-none d-sm-block colorBox rounded" />
					<div className="ml-2">
						<p className="m-0 fa-lg fw-5">{adData.appName}</p>
						<p className="m-0 text-muted fa-small fw-5">
							{adData.publisherName}
						</p>
					</div>
				</Container>
				{singleAdData.length ? (
					<DataTable
						singleAdData={singleAdData}
						handleModal={data => handleModal(data)}
					/>
				) : loading ? (
					<Loader />
				) : (
					<h3 className="text-center mt-5">Data Unavailable</h3>
				)}
			</Container>
		</>
	);
};

export default AdInfoPage;
