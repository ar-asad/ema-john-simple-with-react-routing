import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    };
    if (user) {
        navigate('/shops');
    }

    const handleSignInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='w-2/5 mx-auto border-2 border-state-800 box-border rounded-lg flex justify-center'>
            <div className=''>
                <p className='text-4xl text-center font-normal py-7'>Login</p>
                <form >
                    <div className='mb-4'>
                        <label className='block' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='border-2 w-96 h-10 rounded-md text-2xl  border-state-900' type="text" name='email' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="email">Password</label>
                        <input onBlur={handlePasswordBlur} className='border-2 w-96 h-10 rounded-md text-2xl  border-state-900' type="password" name='password' required />
                    </div>
                    <p className='text-red-400'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input onClick={handleSignInUser} className='hover:bg-orange-400 cursor-pointer text-xl w-96 bg-orange-200 h-10 border-0 rounded-md mb-4' type="submit" value="Login" />

                    <p>New to Ema-john? <Link className='text-orange-300' to="/signup">Create an account</Link></p>
                    <div className='flex m-4 justify-center items-center'>
                        <div className='w-2/5 h-px bg-slate-600'></div>
                        <p className='p-4'>or</p>
                        <div className='w-2/5 h-px bg-slate-600'></div>
                    </div>
                    <input className='cursor-pointer mb-4 text-lg w-96 border-state-900 h-10 border-2 rounded-md' type="submit" value="Continue with Google" />
                </form>
            </div>


        </div>
    );
};

export default Login;