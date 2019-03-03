import React, {Component} from 'react';
import { NavLink } from "react-router-dom";



export default class FilmsNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            
                <div className="films-link-wrapper">
                <div className="vidLink">
                <NavLink to="/kennedy_josh" activeClassName="nav-link-active"> <img width="15%" height="10%" src="../assets/images/bgImage.jpg" alt="Kennedy and Josh"/> </NavLink>
                </div>
                <div className="vidLink">
                <NavLink to="/hannah_josh" activeClassName="nav-link-active"> <img width="15%" height="10%" src="../assets/images/bgImage.jpg" alt="Hannah and Josh"/> </NavLink>
                </div>
                
                </div>
            
        )
    }
}