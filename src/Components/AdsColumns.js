import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import ColumnComponent from "./ColumnComponent";
import Loader from "./Loader";

const AdsColumns = () => {
	const [adsList, setAdsList] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		return await axios.get("https://api.npoint.io/adf6676a313fa01f787d");
	};

	useEffect(() => {
		fetchData()
			.then(({ data }) => {
				setAdsList(data);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	}, []);

	return adsList.length ? (
		<Container fluid className="column__adsList">
			{adsList.map(adData => (
				<ColumnComponent key={adData.id} adData={adData} />
			))}
		</Container>
	) : loading ? (
		<Loader />
	) : (
		<h3 className="text-center mt-5">No Ads Available</h3>
	);
};

export default AdsColumns;
