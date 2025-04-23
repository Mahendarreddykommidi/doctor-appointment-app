import React from "react";
import { useState } from "react";
const Login = () => {
  const [state, Setstate] = useState("signup");
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: ""
  });

  const onSubmithandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center " onSubmit={onSubmithandler} >     
    <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border-rounded-xl text-sm shadow-lg text-gray-600">
        <p className="text-2xl text-gray-600 font-semibold">{state==="signup"?"create your account":"Login"}</p>
        <p> Please {state==="signup"?"signup":"Login"}to book your appointment</p>
        {
          state==="signup" &&  <div className="w-full">
          <p>Full name</p>
          <input
            type="text"
            placeholder="enter your fullname"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
          />
      </div>
        }
       
        <div className="w-full">
            <p>Email</p>
            <input
              type="text"
              placeholder="enter your email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
            />
            
        </div>
        <div className="w-full">
            <p>Password</p>
            <input
              type="text"
              placeholder="enter your password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
            />
            
        </div>
        <button onClick={()=>Setstate("signup")} className="bg-primary mx-auto w-full py-2.5 text-white rounded-sm">{state==="signup"?"Create account":"Login"}</button>
        {
            state==="signup"
            
            ?<p className="gap-2">Already have an account? <span onClick={()=>Setstate("login")}  className="text-primary underline cursor-pointer">Login here</span> </p>
            : <p>Create your account <span onClick={()=>Setstate("Signup")} className="text bg-blue-500 underline cursor-pointer"></span></p>
        }




    </div>
    </form>      


  )
}
  
      
 

export default Login
