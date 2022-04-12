import React from 'react';
import Customlink from '../Customlink/Customlink';
import img1 from '../images/headphones.png';
import Reviews from '../Reviews/Reviews';
import './Home.css'
const Home = () => {
    return (
        <section>
            <div className="flex header-style">
            <div className=" w-6/12 h-7">
                <img src={img1}/>
            </div>
            <div className="p-7">
                <h1 className="text-4xl text-slate-50 font-bold p-4">The Sound of a New Generation</h1>
                <p className="font-bold text-slate-50 text-xl p-4 ">Featuring active noise cancelling that gives you the space to create with fully immersive sound.</p>
                <h4 className="text-2xl text-slate-50 p-4 font-bold">$159</h4>
                <button className=" text-slate-50 rounded-md font-bold ml-5 p-2 bg-red-700">Buy Now</button>
            </div>
        </div>
        <div className="mb-5">
            <Reviews/>
            {/* {
               Reviews.slice(0,3).map(card =><Reviews></Reviews>)
            } */}
            <button className='see-btn text-slate-50 rounded-md font-bold ml-5 p-2 bg-red-700'>  
            <Customlink to='/Reviews'>See All</Customlink></button>
        </div>
        
        </section>
        
    );
};

export default Home;