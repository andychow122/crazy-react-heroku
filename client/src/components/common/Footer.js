import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer class="page-footer font-small stylish-color-dark pt-4 mt-4">
            <div class="text-center">
           
            <ul class="icons">
                <li><i class="fa fa-facebook"></i></li>
                <li><i class="fa fa-twitter"></i></li>
                <li><i class="fa fa-linkedin"></i></li>
            </ul> 
        
    </div>
            <div class="footer-copyright py-3 text-center">
        
        <div>
            Published By:
        </div>
        
        <a href="https://andkcho.github.io/portfolio/home.html"> Andrew Cho -</a>
        <a href="https://github.com/andychow122"> Andrew Chow -</a>
        <a href=""> Zachary Johnson </a>
        
    </div>
            </footer>
         )
    }
}
 
export default Footer;

