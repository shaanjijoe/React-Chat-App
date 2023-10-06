import React from 'react'
// import Add from "../img/addAvatar.png"
const Message = ()=>{
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hemlo</p>
                {/* <img src="https://upload.wikimedia. org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="" /> */}
            </div>
        </div>

    )
}

export default Message