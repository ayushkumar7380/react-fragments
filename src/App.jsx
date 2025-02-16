import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Errormessage from "./components/Errormessage";
import FoodItems from "./components/foodItems";

function App (){
  
let sabzilelo = ["Sabzi","Green Vegitable","Roti","Salad","Milk","Ghee"]


  return (
    <>
      <h1>Healty Food</h1>
      <Errormessage kanha={sabzilelo}></Errormessage>
      <FoodItems kchbhi={sabzilelo}></FoodItems>
    </>
  );
}


export default App;