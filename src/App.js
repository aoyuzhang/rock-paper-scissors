import React, {Component} from "react";
// import Controller from "./containers/controller/controller";
import { Typography } from "antd";

import "antd/dist/antd.css";
import"./App.css";

const {Title } = Typography;

class App extends Component{
  render(){
    return(
      <div className = "App">
        <Title level = {3} style={{ textAlign: "center"}}>
          Stone Paper scissors
        </Title>

      </div>
    );
  }
}
export default App;
