import React, { Component } from "react";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
             <video autoPlay muted loop src={"http://thenewcode.com/assets/videos/downtown-los-angeles.mp4"} type="video/webm" />
                {/* <source src="http://thenewcode.com/assets/videos/downtown-los-angeles.mp4" type="video/webm"> */}
                {/* <source src="http://thenewcode.com/assets/videos/downtown-los-angeles.mp4" type="video/mp4"> */}
             {/* </video> */}
            </div>
         )
    }
}
 
export default Video;