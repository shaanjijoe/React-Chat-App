import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState('Something went wrong');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if(password.length <8){
      setErrorMessage('Longer Password Required');
      setErr(true);
      setLoading(false);
      return;
    } else {
      setErrorMessage('Something went wrong');
      // setLoading(false);
    }

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(res);
      const downloadURL = null;

      try {
        // Continue with other operations even if downloadURL is null

        // Update profile
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });

        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });

        // Create empty user chats document in Firestore
        await setDoc(doc(db, "userChats", res.user.uid), {});

        navigate("/");
      } catch (err) {
        console.log(err);
        setErr(true);
        setLoading(false);
      }

    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat App</span>
        <span className="title">Registration</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" onChange={()=> {setErr(false);setLoading(false);}}/>
          <input required type="email" placeholder="email" onChange={()=> {setErr(false);setLoading(false);}}/>
          <input required type="password" placeholder="password" onChange={()=> {setErr(false);setLoading(false);}}/>
          <button disabled={loading}>Sign up</button>
          {!err && loading && "Registering user. Please wait..."}
          {err && <span>{message}</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
