import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='min-h-screen w-full flex items-center justify-center p-4 bg-teal-50'>

            <div className='rounded-xl bg-white shadow-2xl shadow-teal-300 w-full max-w-md p-8 border-[1px] border-teal-400'>
                <h1 className='text-3xl font-bold mb-2 text-teal-600'>Signup Page</h1>

                {/* fullname */}
                <div className='mb-4'>
                    <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'>Full Name</label>
                    <input type="text" className='w-full border rounded-lg px-3 py-2 border-teal-500 outline-none text-teal-600' placeholder='Enter Your Full Name' />
                </div>

                {/* email */}
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Email</label>
                    <input type="email" className='w-full border rounded-lg px-3 py-2 border-teal-500 outline-none text-teal-700' placeholder='Enter Your Email' />
                </div>

                {/* Password */}
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700 font-medium mb-1'>Password</label>
                    <div className='relative'>
                        <input type={`${showPassword ? "text" : "password"}`} className='w-full border rounded-lg px-3 py-2 border-teal-500 outline-none text-teal-600' placeholder='Enter Your Password' />
                        <button className='absolute cursor-pointer right-3 top-2.5 text-teal-700' onClick={() => setShowPassword(prev => !prev)}>{!showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}</button>

                    </div>
                </div>
                <div className='w-full '>
                    <button className='bg-teal-500 w-full rounded-2xl py-2 text-white cursor-pointer hover:bg-emerald-500'>Signup</button>

                </div>
            </div>
        </div>
    )
}

export default Signup