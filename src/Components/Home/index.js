import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import websdk from '@sumsub/websdk';

import './style.scss';

const Home = () => {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const history = useHistory();
	return (
		<div className="home">
			<h1>CBL Service KYC - POC</h1>
			<form>
				<h4>Type your email address and phone number:</h4>
				<div>
					<label>Email</label>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>

				<div>
					<label>Phone</label>
					<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
				</div>

				<h5>Select your type:</h5>
				<div style={{ justifyContent: 'flex-end' }}>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {
							if (email && phone) {
								history.push(`/individual/${email}/${phone}`);
							}
						}}
					>
						Individual
					</button>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {
							if (email && phone) {
								history.push(`/corporate/${email}/${phone}`);
							}
						}}
					>
						Corporate
					</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
