import React, { Component } from "react";
import NavBar from "../common/NavBar";
import API from "../../utils/API";
import Logo from '../common/Logo';
import Video from '../common/Video';



class Deals  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: [],
        address: [],
        photo: [],
        deal: [],
        query: "https://www.google.com/maps/search/?api=1&query="
     }
         
}

componentDidMount(){
    console.log("hello")
    API.merchantInfo().then(res => {
        console.log(res.data.merchantsAddress);

        this.setState({address: res.data.merchantsAddress, name: res.data.merchantsName, photo: res.data.merchantsPhoto, deal: res.data.merchantsDeal});
    })
}

handleRedeem(){
    console.log("pizza")
}

render
  render() { 
    
    return (
      <div className="dropinWrapper">
      <Video/>
        <NavBar/>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[0]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[0]}<br/>{this.state.deal[0]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[1]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[1]}<br/>{this.state.deal[1]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[2]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[2]}<br/>{this.state.deal[2]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[3]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[3]}<br/>{this.state.deal[3]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[4]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[4]}<br/>{this.state.deal[4]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[5]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[5]}<br/>{this.state.deal[5]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={this.state.photo[6]} alt="" style={{width: "331px", height: "196px"}}/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">{this.state.name[6]}<br/>{this.state.deal[6]}</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <a href={this.state.query + this.state.address[0]}>
                        <button type="button" onClick={this.handleRedeem} className="btn btn-primary" style={{float: ""}}>REDEEM HERE</button>
                        </a>
                        </div>
                    </div>
                </div>
        </div>
            
        <Logo/>
      </div>
      )
  }
}
 
export default Deals ;