import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
// import Chat from '../components/Chat'
// import Add from "../img/addAvatar.png"
const Home = ()=>{
    return (
        <div className="home">
            <div className="container">
                <Sidebar></Sidebar>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Home