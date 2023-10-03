import React from 'react'

const Register = ()=>{
    return (
        <div className="FormContainer">
            <div className="FormWrapper">
                <span className="logo">LoGO</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password'/>
                    <input type="file"/>
                    <button>Sign Up</button>
                </form>
                <p>Already Have an account? Login</p>

            </div>
        </div>
    )
}

export default Register