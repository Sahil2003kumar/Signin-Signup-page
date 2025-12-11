import axios from 'axios';
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
const Login = () => {
    const navigate = useNavigate();
    //state of showing password
    //done
    const [showPassword, setShowPassword] = useState(false)

    //state for storing the data
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    //handle sign in function for handle the signin
    const handleSignIn= async()=>{
      setLoading(true)
try {
    const result = await axios.post(`${serverUrl}/api/auth/signin`,{
        email,password
    },{withCredentials:true})
    console.log(result)
    setEmail('')
    setPassword('')
    setLoading(false)
    toast.success("Login Successfull")
} catch (error) {
  toast.error(error.response.data.message)  
  setLoading(false)
}
    }
   
    return (
  <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-500 via-purple-500 to-slate-400 p-6 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
    </div>

    <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_rgba(139,92,246,0.4)] border border-purple-500/20 p-8 relative z-10 transition-all duration-300 hover:shadow-[0_8px_48px_rgba(139,92,246,0.5)] hover:border-purple-400/30">
      
      <div className="text-center mb-8">
        <div className="inline-block mb-3">
        
        </div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-sm">Sign in to continue yours journey</p>
      </div>

      {/* email */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-slate-300 font-medium mb-2 text-sm">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 focus:border-cyan-400 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-400/30 focus:bg-slate-700/70 hover:border-slate-500"
          placeholder="Enter Your email"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-8">
        <label htmlFor="password" className="block text-slate-300 font-medium mb-2 text-sm">Password</label>
        <div className="relative">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            className="w-full bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 focus:border-cyan-400 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-400/30 focus:bg-slate-700/70 hover:border-slate-500"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {!showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </button>
        </div>
      </div>

      {/* button */}
      <div className="w-full mb-6">
        <button
          onClick={handleSignIn}
          className="w-full py-3.5 rounded-xl text-base font-bold text-white 500 border hover:bg-violet-800 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
        >
          {loading ? <ClipLoader size={20} color="white" /> : "Sign In"}
        </button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 text-white bg-slate-800/50">or</span>
        </div>
      </div>

      <p className="text-center text-white text-sm">
        Don't Have An Account?{" "}
        <span
          onClick={() => navigate('/signup')}
          className="text-cyan-400 font-bold hover:text-cyan-300 cursor-pointer transition-colors duration-200 hover:underline"
        >
          SIGN UP
        </span>
      </p>
    </div>
  </div>
);
}

export default Login

//done