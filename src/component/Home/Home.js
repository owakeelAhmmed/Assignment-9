import React from 'react';
import img1 from '../images/headphones.png';
import home from './Home.css'
const Home = () => {
    return (
        <div className="flex ">
            <div className=" w-6/12 h-7">
                <img src={img1}/>
            </div>
            <div className="p-7">
                <h1 className="text-4xl text-slate-50 font-bold p-6">The Sound of a New Generation</h1>
                <p className="font-bold text-slate-50 text-xl p-6 ">Featuring active noise cancelling that gives you the space to create with fully immersive sound.</p>

                <button className=" text-slate-50 rounded-md font-bold ml-5 p-2 bg-red-700">Buy Now</button>
            </div>
        </div>
    );
};

export default Home;