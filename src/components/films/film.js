import React, { Component } from 'react';


export default class ViewVideo extends Component{
    constructor(props) {
        super(props)
            console.log(props);
        }

    render() {
    return(
        <div className="square">

            
            <div className="vid-wrapper">
            <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/`+ this.props.match.params.id} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>

  
        </div>

    )}
    }