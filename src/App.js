import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Headder from './component/Headder/Headder';
import Reviews from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import Blog from './component/Blog/Blog';
import About from './component/About/About';

function App() {
  return (

    <div>
      <Headder/>
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/Reviews" element = {<Reviews/>} />
      <Route path="/Dashboard" element = {<Dashboard/>} />
      <Route path="/Blogs" element = {<Blog/>} />
      <Route path="/About" element = {<About/>} />
     
    </Routes>
    </div>
    
  );
}

export default App;
