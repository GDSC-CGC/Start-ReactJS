import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUser(response.data.results[0]);
      console.log(response.data.results[0]);
    });
  }, []);
  return (
    <div className="App">
      <div className="main">
        <div className="photo-area ">
          <img className="photo" src={user?.picture?.large}></img>
        </div>
        <p style = {{fontWeight:'bold'}}>
          {user?.name?.title + " " + user?.name?.first + " " + user?.name?.last}
        </p>
        <div style = {{width:'100%',display:'grid',placeItems:'center'}}>
          <div style  ={{width:'70%',display:'grid'}}>
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}> 
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',width:'100px'}}>
              <p style = {{fontWeight:'bold'}}>Email</p>
              <small >{user?.email}</small>
            </div>
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',width:'100px'}}>
              <p style = {{fontWeight:'bold'}}>Phone</p>
              <small >{user?.phone}</small>
          </div>
          </div>
          <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',width:'100px'}}>
            <p style = {{fontWeight:'bold'}}>Count</p>
              <small >{user?.location?.country}</small>
            </div>
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',width:'100px'}}>
            <p style = {{fontWeight:'bold'}}>State</p>
              <small >{user?.location?.state}</small>
            </div>
          </div>
          <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',width:'100px'}}>
            <p style = {{fontWeight:'bold'}}>City</p>
              <small >{user?.location?.city}</small>
            </div>
            <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',width:'100px'}}>
            <p style = {{fontWeight:'bold'}}>Gender</p>
              <small >{user?.gender}</small>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
