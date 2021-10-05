import React from 'react';
import {  Link } from "react-router-dom";


function Card({ person }) {
    return (
        <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            
            <img className="" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
            <div>
                <Link to={`/book/${person.id}`}>{person.title}</Link>
                <p>{person.author}</p>
            </div>
        </div>
    );
}

export default Card;