import React from "react";
import { Component } from "react";
import Birthday from "./FunComp/Birthday";
import Apicallcomp from "./Component/Apicallcomp";
import Navcomp from "./Component/Commonnav/Navcomp";
import FormReact from "./FunComp/FormReact";

class App extends Component{


  render(){
    return(
      <>
      {/* <Navcomp /> */}

      {/* <Birthday /> */}

      {/* <Apicallcomp /> */}

      <FormReact />
      </>
    )
  }
}

export default App