import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
        
    const login=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //redirect to the homepage
            history.push("/");

        }).catch((e)=> alert(e.message));

    }

const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
       history.push("/");
    }).catch((e)=> alert(e.message));
}


  return (
    <div className="login">
      <Link to="/">
        <h1 className="login__title">
          All<span className="text-primary">In</span>One
        </h1>
      </Link>

      <div className="container"> 
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={login} className='login__btn' type="submit">Sign In</button>

         
        </form>
        <p>
            By continuing, you agree to Conditions of Use and Privacy Notice.
          </p>
          <button onClick={register} className="register__btn" type="submit">Create Account</button>
      </div>
    </div>
  );
}

export default Login;
