import React from 'react';
import  './SignIn.css';


function SignIn() {
    const register=(e)=>{
        e.preventdefault();
    };
    const signI = (e)=>{
        e.preventdefault();
    }
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Passsword" type="password"/>
                <button type="submit" onClick={signI}>Sign in</button>
                <h4>
                    <span className="signup-gray">Don't have an account?</span><span className="signup-link" onClick={register}>Sign here</span> </h4>
            </form>
        </div>
    )
}

export default SignIn
