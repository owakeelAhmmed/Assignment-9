import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../Customlink/Customlink';

const Headder = () => {
    return (
        <div className="sticky top-0 px-12 py-8 flex bg- justify-center md: justify-between">
             <Link className=' hidden md:block font-sans font-bold text-xl text-gray-200' to='/'>
          Logo
        </Link>
            <div className='flex gap-4 text-base  font-sans font-bold'>
            <Customlink to='/'>HOME</Customlink>
            <Customlink to='/Reviews'>REVIEWS</Customlink>
            <Customlink to='/Dashboard'>DASHBOARD</Customlink>
            <Customlink to='/Blog'>BLOG</Customlink>

            </div>
            
        </div>
    );
};

export default Headder;