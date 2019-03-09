import React from 'react';


export default function(props) {
    return(
        <div className="square">
            
            <div className="img-wrapper">
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/5eVk6tmwfIU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>

            <div className="square-text-wrapper">
                <a href="#spicy" name="spicy" className="anchor-link">
                    <h1>{props.match.params.slug}</h1>
                </a>

                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>  
                </ul>

            </div>
        </div>

    )}

