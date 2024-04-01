import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth,database} from '../firebaseConfig'; 
import {useNavigate} from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');

    const handleForgetPassword = (e)=>{
        e.preventDefault();
        sendPasswordResetEmail(auth,email).then(()=>{
            toast.success('Check your mail for Reset Instructions');
            toast.loading('Redirecting...');
            setTimeout(()=>{
                toast.dismiss();
                navigate('/login');
            },2000);
        }).catch((err)=>{
            toast.error('Unable to send the mail');
        });
    }
    return (
        <>
        <Toaster position="top-right"  toastOptions={{ duration: 2000}}/>
            <div className='flex h-screen w-full bg-[#222222] justify-content-center align-items-center'>
                <div class="mx-auto max-w-md">
                    <div class="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div class="p-4 sm:p-7">
                            <div class="text-center">
                                <div class="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                                <h1 class="block text-2xl font-bold text-gray-800">Forgot password?</h1>
                                <p class="mt-2 text-sm text-gray-600">Don't worry we'll send you reset instructions.</p>
                            </div>

                            <div class="mt-6">
                                <form onSubmit={handleForgetPassword}>
                                    <div class="grid gap-y-4">
                                        <div>
                                            <label for="email" class="mb-2 block text-sm text-gray-600">Email address</label>
                                            <div class="relative">
                                                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" class="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500" required aria-describedby="email-error" />
                                                <div class="pointer-events-none absolute top-4 right-0 hidden items-center px-2 peer-invalid:flex">
                                                    <svg class="h-5 w-5 text-rose-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Reset password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <p class="mt-3 flex items-center justify-center divide-x divide-gray-300 text-center">
                        <span class="inline pr-3 text-sm text-white">
                            Remember your password?
                            <a class="font-medium text-blue-600 decoration-2 hover:underline" href="/login"> Sign in </a>
                        </span>
                    </p>
                </div>
            </div>

        </>
    )
}

export default ForgotPassword