import { useState } from 'react';
import './App.css';

function App() {
	var Restrauntname = ['burger king', 'KFC', 'Macdonals', 'paise bchao'];
	const [name, setName] = useState('');
	const genrateRandom = () => {
		setName(Restrauntname[Math.floor(Math.random() * Restrauntname.length)]);
		const hide = document.querySelector('.hide');
		if (hide && hide.classList.contains('hide')) hide.classList.remove('hide');
		// else return
	};
	return (
		<div className="App">
			<header className="App-header">
                <h1 className="hide position">You Should visit <span className='color'>{name}</span></h1>
				<p>Hit Generate to choose Random Restraunt!</p>
				<br />
				<button onClick={genrateRandom} className="btn color up">
					Genrate
				</button>
			</header>
		</div>
	);
}

export default App;
