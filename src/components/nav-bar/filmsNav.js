import React, {Component} from 'react';
import { NavLink } from "react-router-dom";



export default class FilmsNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        
            <div className="films-link-wrapper">
              <div className="vid-links">

                <div className="vidLink" style={ { backgroundImage: `url("../assets/images/bgImage.jpg")` } }>
                    <NavLink to="/kennedy_josh" activeClassName="nav-link-active"> 
                    <h3 className="link-header">Kennedy and Josh</h3>
                    <p className="link-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </NavLink>
                </div>

                <div className="vidLink" style={ { backgroundImage: `url("../assets/images/bgImage.jpg")` } }>
                    <NavLink to="/hannah_josh" activeClassName="nav-link-active"> 
                    <h3 className="link-header">Hannah and Josh</h3>
                    <p className="link-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </NavLink>

                <div className="vidLink" style={ { backgroundImage: `url("../assets/images/bgImage.jpg")` } }>
                    <NavLink to="/hermana_Ohlsen" activeClassName="nav-link-active"> 
                    <h3 className="link-header">Hermana Ohlsen</h3>
                    <p className="link-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </NavLink>
                </div>

                </div>
               </div>
            </div>
            
        )
    }
}