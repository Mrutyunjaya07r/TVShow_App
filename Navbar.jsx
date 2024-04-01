import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="container" style={{height:"100px",backgroundColor:"rgb(57, 56, 56)",display:"flex"}}>
            <div className="photo" style={{height:"70px",width:"80px",margin:"20px",backgroundColor:"red"}}></div>
            <Link to="/" style={{margin:"10px"}}>TV Shows</Link>
            <Link to="/Watchlist" style={{margin:"10px"}}>Favorite Watchlist</Link>
            <Link to="/About" style={{margin:"10px"}}>About Us</Link>

        </div>
    </div>
  )
}

export default Navbar