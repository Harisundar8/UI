import React from 'react'
import restakeImage from "./restake.png";
import "./App.css";
function App() {
  return (
    
    <div className="container" > 
    <div className="header">
      <div className="incept"><a>Inception</a></div>
      <nav className="navi">
          <a>Node operators</a>
          <a>Blog</a>
          <a>Docs</a>
          <a>More</a>
        
        </nav>
      <button className="buttons">Restake Now</button>
    </div>

      <div className="image-container">
        <h1 className="title">
          <div>Secure <br /></div> 
          <div className="subtext">Native Liquid <br /></div> Restaking</h1>
        <img src={restakeImage} alt="" className="img" />
      </div>
      <button className="button">Restake Now </button>
        
        <p className="down">
            Restake Natively, Slash <br / >     Fear, Unleash Defi
        </p>
    </div>
    
  );
}

export default App;