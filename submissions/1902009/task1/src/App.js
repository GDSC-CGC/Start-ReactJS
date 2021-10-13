import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [restuarant, setRestuarant] = useState(0);
  const restaurants = ['Burger king','Mcdonalds','KFC','Pizza Hut'];
  console.log(restaurants.length,restuarant)
  return (
    <div className="App">
      <div className = "main">
          <h2 className = "heading">Random Restaurant Generator</h2>
            <article className = "main-container">
              <p className = "name">{restaurants[restuarant]}</p>
              <button className = "btn" onClick = {()=>setRestuarant((restuarant + 1) % (restaurants.length))}>Generate Restaurant</button>
            </article>
          
      </div>
    </div>
  );
}

export default App;
