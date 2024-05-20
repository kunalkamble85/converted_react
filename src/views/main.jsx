import React from 'react';
import { useState } from 'react'; // Assuming you are using hooks for state management

const Main = () => {
  const [logout, setLogout] = useState(true); // Initial value for logout state
  
  const home = () => {
    // Functionality for home button click
    // You can define what should happen when the home button is clicked
  }

  const byebye = () => {
    // Functionality for logout button click
    // You can define what should happen when the logout button is clicked
  }

  return (
    <div className="container-fluid">
      <div className="box mainhdr">
        <img src="assets/home_icon.png" className="btn home" onClick={home} alt="Home"></img>
        <strong className="mainHeading">XYZ Bank</strong>
        {logout && <img src="assets/logout.png" className="btn logout" onClick={byebye} width="50px" height="40px" alt="Logout"></img>}
      </div>
      <div className="ui-view">
        {/* This is where your nested view will be rendered */}
      </div>
    </div>
  );
}

export default Main;
