import React, { useContext } from "react";
import { IoVideocam } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <IoVideocam className="img"/>
          <IoPersonAdd className="img"/>
          <CiCircleMore className="img"/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
