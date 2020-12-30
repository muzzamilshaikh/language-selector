import React, { useState, useEffect } from "react";
import AutoCompleteComponent from "./components/AutoCompleteComponent";
import axios from "axios";
import "./app.css";

export default function App() {
	const [state, setState] = useState([]);
	useEffect(() => {
		async function getData() {
			const { data } = await axios.get(
				`https://restcountries.eu/rest/v2/lang/es`,
			);
			setState(state.concat(data));
		}
		getData();
	}, []);

	return (
		<div className='align-center-items'>
			<div>
				<AutoCompleteComponent languages={state} />
			</div>
		</div>
	);
}
