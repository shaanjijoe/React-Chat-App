import React from 'react'
// import Add from "../img/addAvatar.png"
const Login = ()=>{
    return (
        <div className="FormContainer">
            <div className="FormWrapper">
                <span className="logo">LoGO</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password'/>
                    <button>Sign In</button>
                </form>
                <p>Don't have an account? Sign Up</p>

            </div>
        </div>
    )
}

export default Login