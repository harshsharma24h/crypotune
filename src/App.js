
import React from 'react'
import Navbar from './components/Navbar'
// import News from'./components/News'

import Coinpage from './components/Coinpage'
import News from './components/News'
import { Route, Routes,Link } from "react-router-dom";
import './components/layout.css'
import Coin from './components/Coin';


const App = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* <News></News> */}




{/* this the working app */}

     <div >
        <div className="row">
          <div className="col-2" style={{ width: "13%" }}>
            <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/News">News</Link>
              {/* <>Home</> */}
              {/* <a href="#news">News</a> */}
              {/* <a href="#contact">Contact</a> */}
              {/* <a href="#about">About</a> */}


            </div>


          </div>


          <div className="col-10" style={{ width: "85%" }}>
            <Routes>
              <Route path="/" element={<Coinpage />} ></Route>
              <Route path="/News" element={<News />} ></Route>
            </Routes>
          </div>
        </div>
      </div>






{/* <Coin></Coin> */}

      {/* <Test></Test> */}
    </>
  )
}

export default App
