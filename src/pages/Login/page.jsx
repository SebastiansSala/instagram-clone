import React from 'react'
import LoginComponent from './LoginComponent'
import Logo from './Logo'
import LoginButton from './LoginButton'
import GoogleLoginButton from './GoogleLoginButton'

export default function Page(){
    return(
        <div className='flex h-screen flex-col justify-center items-center'>
            <Logo/>
            <GoogleLoginButton/>
            <div className='mb-4'>
                <span className='w-8'/>
                <span>OR</span>
                <span className='w-10 h-10'></span>
            </div>
            <LoginComponent/>
            <div className='w-52'>
            <p className='text-blue-400 text-right mb-4'>Forgot password?</p>
            </div>
            <LoginButton/>
            <p className='text-sm text-gray-400'>Don't have an account? <span className="text-blue-400">Sign up</span></p>
        </div>
    )
}