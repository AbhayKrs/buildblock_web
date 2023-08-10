import { useState } from 'react';

import { ReactComponent as GoogleIcon } from '../assets/icons/google-icon.svg';
import { IoCloseSharp, IoCloseCircle } from 'react-icons/io5';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [stayLoggedIn, setLoggedIn] = useState(false);

    const handleStayLoggedin = (event) => {
        setLoggedIn(event.target.checked);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitClick = () => {
        const signinInput = {
            username: username,
            password: password,
        }
        console.log('test', stayLoggedIn + " " + signinInput);
        setUsername('');
        setPassword('');
    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl m-auto border-2 border-slate-300 dark:border-neutral-700 rounded-lg p-10 p-2">
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h1 className="font-caviar text-4xl font-bold text-gray-700 dark:text-gray-300 ">Sign up to BuildBlock</h1>
                    <h2 className="font-caviar font-bold tracking-wide text-gray-700 dark:text-gray-400 ">Have an account already? <span className='text-indigo-500 cursor-pointer' onClick={() => navigate('/signin')}>Sign in</span></h2>
                </div>
                <div className="relative flex items-center mt-6">
                    <input
                        name="name"
                        value={name}
                        className="font-caviar bg-slate-50 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 text-neutral-500 dark:placeholder:text-neutral-400 rounded-lg py-2 px-4 w-full focus:outline-none"
                        type="text"
                        placeholder="Name"
                        onChange={handleNameChange}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                onSubmitClick()
                            }
                        }}
                    />
                </div>
                <div className="relative flex items-center">
                    <input
                        name="email"
                        value={email}
                        className="font-caviar bg-slate-50 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 text-neutral-500 dark:placeholder:text-neutral-400 rounded-lg py-2 px-4 w-full focus:outline-none"
                        type="text"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                onSubmitClick()
                            }
                        }}
                    />
                </div>
                <div className="relative flex items-center">
                    <input
                        name="username"
                        value={username}
                        className="font-caviar bg-slate-50 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 text-neutral-500 dark:placeholder:text-neutral-400 rounded-lg py-2 px-4 w-full focus:outline-none"
                        type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                onSubmitClick()
                            }
                        }}
                    />
                </div>
                <div className="relative flex items-center">
                    <input
                        name="password"
                        value={password}
                        className="font-caviar bg-slate-50 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 text-neutral-500 dark:placeholder:text-neutral-400 rounded-lg py-2 px-4 w-full focus:outline-none"
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                onSubmitClick()
                            }
                        }}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <hr className="w-full border-1 border-gray-600 dark:border-gray-400" />
                    <p className="font-caviar text-base font-bold leading-4 px-2.5 text-gray-600 dark:text-gray-400">OR</p>
                    <hr className="w-full border-1 border-gray-600 dark:border-gray-400" />
                </div>
                <a href="#" className="flex items-center justify-center w-full py-2 px-3 rounded-lg border-2 border-slate-400 dark:border-gray-700 dark:border-neutral-600 mt-6">
                    <GoogleIcon />
                    <p className="font-caviar font-bold tracking-wider ml-4 text-gray-800 dark:text-gray-300">Sign in with Google</p>
                </a>
                {false && !username && !password ?
                    <div className='flex p-2 border-2 border-red-500 red-500 rounded-lg space-x-2'>
                        <IoCloseCircle className='h-5 w-5 text-red-500' />
                        <p className='font-caviar font-semibold text-sm text-red-500'>message</p>
                    </div> :
                    null
                }
                <div className='flex flex-row space-x-2'>
                    <button onClick={onSubmitClick} className='w-fit font-caviar font-bold tracking-wide bg-indigo-500 hover:bg-indigo-600 text-gray-200 px-6 py-2 rounded-md text-lg'>Sign Up</button>
                    <button onClick={onSubmitClick} className='w-fit font-caviar font-bold tracking-wide bg-gray-400 hover:bg-gray-300 text-neutral-900 px-6 py-2 rounded-md text-lg'>Cancel</button>
                </div>
                <p className='font-caviar text-gray-700 dark:text-neutral-400 text-sm'>By clicking Sign Up, I confirm that I have read and agree to the Artyst <button type='button' className='text-sm font-bold text-indigo-500'>Terms of Service</button> and <button type='button' className='text-sm font-bold text-indigo-500'>Privacy Policy</button>.</p>
            </div>
        </div>
    )
}

export default Signup;