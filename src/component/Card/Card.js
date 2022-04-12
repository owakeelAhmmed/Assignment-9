import React from 'react';
import { FcRating } from 'react-icons/fc';
import './Card.css'
const Card = (props) => {
    console.log(props);
    const { image, name, message, rate} = props.card;
    return (
        <div className="card bg-red-500 p-4 rounded-md text-center">
            <div className="p-4">

                <div className="ml-7">
                    <img src={image} alt="" />
                </div>

                <div className='mt-4'>
                    <h1 className='font-bold'>{name}</h1>
                    <p>{message}</p>
                    <span className='flex ml-12  items-center '> <FcRating/> {rate}</span>
                </div>

            </div>
        </div>
    );
};

export default Card;