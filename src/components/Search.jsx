import React from 'react'
// import Add from "../img/addAvatar.png"
const Search = ()=>{
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='Find User'/>
            </div>
            <div className="userChat">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="" />
                <div className="userChatInfo">
                    <span>June</span>
                </div>
            </div>
        </div>
    )
}

export default Search