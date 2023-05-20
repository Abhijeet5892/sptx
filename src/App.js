import React from "react";

import IconMenu from "./Components/IconMenu";
import Header from "./Components/Header";
import RightsideDashboard from "./Components/RightsideDashboard";
import BasicCard from "./Components/BasicCard";
import Table from "./Components/Table";
// import './App.css';
const App = () => {
  return (
    <div className="container-fluid p-0 m-0" >
      <div className="col-12 p-0 m-0" >
        <Header />
      </div>
      <div className="row p-0 m-0" style={{backgroundColor:'#000000'}}>
        <div className="col-md-2 p-0 m-0" style={{border:'1px solid'}}>
          <IconMenu />
        </div>
        <div className="col-md-7 " style={{border:'1px solid'}}>
          <BasicCard />
        </div>
        <div className="col-md-3 pl-2 m-0">
          <RightsideDashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
