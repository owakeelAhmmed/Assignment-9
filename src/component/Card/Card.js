import React from 'react';
import { FcRating } from 'react-icons/fc';
import './Card.css'
const Card = (props) => {
    console.log(props);
    const { image, name, message, rate} = props.card;
    return (
        <div className="card bg-red-500 p-4 text-center">
            <img src={image} alt="" />
            <h1>Name: {name}</h1>
            <p>{message}</p>
            <span className='flex '> <FcRating/> {rate}</span>
        </div>
    );
};

export default Card;