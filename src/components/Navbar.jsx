import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">React Chat App</span>
      <div className="user">
        <FaUser/>
        <span>{currentUser.displayName}</span>
        <IoLogOut onClick={()=>signOut(auth)}/>
      </div>
    </div>
  )
}

export default Navbar