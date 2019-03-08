import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            
                <div className="nav-wrapper">
                    <div className="left-side">
                        <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                        <NavLink to="/bio" activeClassName="nav-link-active">Bio</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                        <NavLink to="/films" activeClassName="nav-link-active">Films</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                        </div>
                    </div>
                    <div className="right-side">
                    Kelsey Creations
                    </div>
                </div>

                
            
        )
    }
}