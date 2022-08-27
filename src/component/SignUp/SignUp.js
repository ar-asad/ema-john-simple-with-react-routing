import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    };
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    };

    if (user) {
        navigate('/shops');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 charecter or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className='w-2/5 mx-auto border-2 border-state-800 box-border rounded-lg flex justify-center mb-6'>
            <div className=''>
                <p className='text-4xl text-center font-normal py-7'>Sign Up</p>
                <form onSubmit={handleCreateUser}>
                    <div className='mb-4'>
                        <label className='block' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='border-2 w-96 h-10 rounded-md text-2xl  border-state-900' type="email" name='email' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='border-2 w-96 h-10 rounded-md text-2xl  border-state-900' type="password" name='password' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} className='border-2 w-96 h-10 rounded-md text-2xl  border-state-900' type="password" name='confirm-password' required />
                    </div>
                    <p>{error}</p>
                    <input onClick={handleCreateUser} className='hover:bg-orange-400 cursor-pointer text-xl w-96 bg-orange-200 h-10 border-0 rounded-md mb-4' type="submit" value="Sign Up" />

                    <p>Already Have an account? <Link className='text-orange-300' to="/login">Login</Link></p>
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

export default SignUp;