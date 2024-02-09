import React from "react";
import { Component } from "react";
import Birthday from "./FunComp/Birthday";
import Apicallcomp from "./Component/Apicallcomp";
import Navcomp from "./Component/Commonnav/Navcomp";
import FormReact from "./FunComp/FormReact";
import GroceryBud from "./FunComp/GroceryBud";

class App extends Component{


  render(){
    return(
      <>
      {/* <Navcomp /> */}

      {/* <Birthday /> */}

      {/* <Apicallcomp /> */}

      {/* <FormReact /> */}

      <GroceryBud />
      </>
    )
  }
}

export default App