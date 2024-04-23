import "./App.css";
import {  Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Movie from "./MovieDetail/Movie";
import TAMIL from "./components/Pages/TAMIL";
import ENGLISH from "./components/Pages/ENGLISH";

import Hindii from "./components/Pages/Hindii";
import Malay from "./components/Pages/Malay";
import SignIn from "./components/Pages/Signin";
import SignUp from "./components/Pages/Signup";
import Telugu from "./components/Pages/Telugu";
import MovieSearch from "./components/Ser/MovieSearch";
import MovieCard from "./components/Card/MovieCard";
import Moviee from "./components/Ser/Moviee";
import Upcoming from "./components/Pages/Upcoming";
import Trending from "./components/Pages/Trending";
import Blockbuster from "./components/Pages/Blockbuster";
import Topvote from "./components/Pages/Topvote";
import Filterr from "./components/Pages/Filterr";






function App() {
 return (
 <>
 <NavBar sticky="top"/>
    <div className="pages">
          <Routes>
            <Route path="/" element={<TAMIL/>} />
      
            <Route path="/tamil" element={<TAMIL/>} />
            <Route path="/english" element={<ENGLISH/>} />
            <Route path="/Hindii" element={<Hindii/>} />
            <Route path="/Malay" element={<Malay/>} />
            <Route path="/MovieSearch" element={<MovieSearch/>} />
            <Route path="/MovieCard" element={<MovieCard/>} />
            <Route path="/Moviee" element={<Moviee/>} />
    
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/SignUp" element={<SignUp/>} /> 
            <Route path="/Telugu" element={<Telugu/>} />
            <Route path="/Upcoming" element={<Upcoming/>} /> 
            <Route path="/Trending" element={<Trending/>} /> 
            <Route path="/Blockbuster" element={<Blockbuster/>} />  
            <Route path="/Topvote" element={<Topvote/>} /> 
            <Route path="/Filterr" element={<Filterr/>} /> 

            <Route path="movie/:id" element={<Movie/>}></Route>
        
            <Route path="movie/:type" element={<Movie/>}></Route>
       
            
        </Routes>
        </div>
  </>
  );
}

export default App;