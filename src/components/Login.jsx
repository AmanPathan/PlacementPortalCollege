import React from 'react';
import '../Styles/Login.css';
import { useState, useEffect } from 'react';
import { auth} from '../firebaseConfig';
import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
      toast.success("Logged in Successfully!");
      setTimeout(() => {
        navigate('/admin');
        window.location.reload();
      }, 2000);
      localStorage.setItem('user',JSON.stringify(userCredentials.user));
    })
    .catch((err)=>{
      toast.error("Invalid Credentials!");
    })
  }
  return (
    <>
    <Toaster position="top-right"  toastOptions={{ duration: 2000}}/>
      <div class="flex h-screen w-full items-center justify-center bg-[#222222]">
        <div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
          <div class="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5 login_left"></div>
          <div class="w-full sm:w-3/5">
            <div class="p-8">
              <h1 class="text-3xl font-black text-slate-700">Admin Login</h1>
              <p class="mt-2 mb-5 text-base text-center leading-tight text-gray-600">only registered admins can login</p>
              <form class="mt-8" onSubmit={handleLogin}>
                <div class="relative mt-2 w-full">
                  <input type="text" id="email" value={email} class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={(e)=>{setEmail(e.target.value)}}/>
                  <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
                </div>
                <div class="relative mt-2 w-full">
                  <input type="password" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={(e)=>{setPassword(e.target.value)}}/>
                  <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
                </div>
                <input class="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type="submit" value="Login" />
              </form>
              <div class="mt-4 text-center">
                <p class="text-sm text-gray-600">Forgot the Password? <a href="/resetpassword" class="font-bold text-blue-600 no-underline hover:text-blue-400">Reset Password</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login