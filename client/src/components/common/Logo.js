import React, {Component} from "react";

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="logo">
                {/* <h2 style={{textAlign: "center", color: "black"}}>ONE PUNCH CARD</h2> */}
                <img src={"http://www.stickpng.com/assets/images/58582c01f034562c582205ff.png"} style={{textAlign: "center", width: "200px", height: "200px"}} alt="" />
            </div>
            
         )
    }
}
 
export default Logo;