import React from 'react'
 import './style.css'
 import { Link } from "react-router-dom";
const loginpage = (props) => {

  return (
    <>

      <div className="login">
        <form className='need-validation'>
            <div className="login-1">

         <h1>{props.name} Login-Page!!</h1>

        <div className="form-group was-validated">
                <label className='form-label' htmlFor='email'>Email Adress</label><br />
                <input className='form-control' type="email" id='email' required/> 

        </div>

        <div className="form-group was-validated">
                <label className='form-label' htmlFor='password'>Password</label><br />
                <input className='form-control' type="password" id='password' required/> 
                <div className="invalid-feedback">
                    Please Enter your Password
                </div>
        </div>
        <Link className="nav-link active" aria-current="page" to={props.newpage}>
                  <h2> <button className="btn btn-success">Sign in </button></h2>
                </Link>
                <div className="forgotpassword">
                <Link className="nav-link active" aria-current="page" to ='/forgot1'> <p>Forgotten password</p></Link>
                </div>

            </div>
            </form>
      </div>
    </>
  )
}

export default loginpage