import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);
  // console.log(message);
  const timestamp = message.date;
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);

  // Get HH:MM format
  const timeString = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // console.log(timeString);
  // let dat = new Date(message.date);
  // console.log(dat);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        {message.senderId === currentUser.uid ? <FaRegUserCircle className="img"/>: <FaUserCircle className="img"/>}
        <span>{timeString}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
