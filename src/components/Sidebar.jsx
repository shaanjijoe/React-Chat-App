import React from 'react'
import Navbar from '../components/Navbar'
import Search from './Search'
import Chats from './Chats'
// import Add from "../img/addAvatar.png"
const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    )
}
export default Sidebar