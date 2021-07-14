import React,{useState} from "react";
import "./login.css";

function Login() {
    const[signIn, SetSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login-background">
        <img className="login-logo" src="" alt="" />
      </div>
      <button onClick={()=>SetSignIn(true)} className="login-button">
        Sign in
         </button>
       <div className="login-gradient"></div>
       <div className="login-body">
           {signIn ? (
               <SignIn/>
           ):(
            <>
            <h1>Take a look, I know you want too!</h1>
            <h2>Unlimited Movies and Shows</h2>
            <h3>Login</h3>
            <div className="login-input">
                <form>
                    <input type="email"placeholder="email-address">
                        <button onClick={()=>SetSignIn(true)}  className="login-here">
                            LOGIN HERE
                        </button>
                    </input>
 
                </form>
            </div>
            </>

           )}

           {/* <>
           <h1>Take a look, I know you want too!</h1>
           <h2>Unlimited Movies and Shows</h2>
           <h3>Login</h3>
           <div className="login-input">
               <form>
                   <input type="email"placeholder="email-address">
                       <button onClick={()=>SetSignIn(true)}  className="login-here">
                           LOGIN HERE
                       </button>
                   </input>

               </form>
           </div>
           </> */}

       </div>
    </div>
  );
}

export default Login;
