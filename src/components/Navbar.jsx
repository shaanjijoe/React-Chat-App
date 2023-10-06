import React from 'react'
import Add from "../img/img.png"
// import 
const Navbar = ()=>{
    return (
        <div className="navbar">
            <span className="logo">LoGO</span>
            <div className="user">
                <img src={Add} alt="" />
                <span>Don</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar