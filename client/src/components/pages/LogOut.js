import React, { Component } from "react";
import API from "../../utils/API";
import Video from '../common/Video';

class LogOut extends Component {
  

componentDidMount() {
  API.logout();
}

render
  render() { 
    return (
      <div >
        <Video />
       THANKS FOR STOPPING BY!

       <a className="nav-link" href="/" style={{float: "right"}}>RESET</a>
      </div>
      )
  }
}
 
export default LogOut ;