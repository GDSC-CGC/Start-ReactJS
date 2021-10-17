import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [details, setDetails] = useState({});
	useEffect(() => {
		axios.get('https://randomuser.me/api/').then((response) => {
			setDetails(response.data.results[0]);
			console.log(response);
		});
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<div className="blurred-box">
					<div className='content'>
						<p>
							<img
								className="profile-pic"
								src={details.picture?.large}
								alt="profile pic"
							/>
						</p>

						<h1>
							{details.name?.title} {details.name?.first}
							{details.name?.last}
						</h1>
						<h4>
							Email: <span> {details.email}</span>
						</h4>
						<h4>
							Phone: <span> {details.phone}</span>
						</h4>
						<p>
							Country: <span> {details.location?.country}</span>
						</p>
						<p>
							State: <span> {details.location?.state}</span>
						</p>
						<p>
							City: <span> {details.location?.city}</span>
						</p>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
