import React, { useEffect } from 'react';
import websdk from '@sumsub/websdk';
import axios from 'axios';

import './style.scss';

let accessToken = '';

const Individual = (props) => {
	const {
		match: { params },
	} = props;

	let applicantEmail = String(params.email).replace(/@/g, '%40');
	let applicantPhone = params.phone;

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/get_token`, { params: { UserID: applicantEmail } })
			.then((res) => {
				accessToken = res.data.data.token;
				console.log(applicantEmail);
				let sumsubSdk = websdk
					.Builder('https://test-api.sumsub.com', 'IndividualKYC')
					.withAccessToken(accessToken, () => {
						// EXPIRATION HANDLER
						/* generate a new token and launch WebSDK again */
					})
					.withConf({
						lang: 'en',
						email: applicantEmail,
						phone: applicantPhone, // if available

						onMessage: (type, payload) => {
							console.log('WebSDK onMessage', type, payload);
						},
						onError: (error) => {
							console.log('WebSDK onError', error);
						},
					})
					.build();

				sumsubSdk.launch('#sumsub-websdk-container');
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return <div id="sumsub-websdk-container"></div>;
};

export default Individual;
