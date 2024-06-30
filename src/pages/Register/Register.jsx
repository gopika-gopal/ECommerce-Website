import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './account.css';
import { addUser } from '../../utils/userSlice';
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { isValidEmail } from '../../utils/constants';
import { addToken } from '../../utils/tokenSlice';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setstate] = useState("Login");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const changehandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const login = async () => {

        if (!isValidEmail(formData.email))
            return toast.error('Email is not valid')

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/user/login`, formData)
            const { user, token } = response.data;
            localStorage.setItem('token', token);
            toast.success('User Logged in')
            dispatch(addUser(user))
            dispatch(addToken(token))
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message)
            console.log(error.response?.data?.message);
        }

    }

    const signup = async () => {

        if (!isValidEmail(formData.email)) return toast.error('Email is not valid')
        let formIsValid = true;
        const newErrors = { ...errors };

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'FirstName is required';
            formIsValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Lastname is required';
            formIsValid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required'
            formIsValid = false;
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Atleast 6 character are required'
            formIsValid = false;
        }

        setErrors(newErrors);
        if (formIsValid) {

            try {
                const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/user/register`, formData)
                const { newUser, token } = response.data;
                localStorage.setItem('token', token);
                toast.success('User signed up')
                dispatch(addUser(newUser))
                dispatch(addToken(token))
                navigate('/');
            } catch (error) {
                toast.error('Failed to sign up')
                console.log(error);
            }
        }

    }

    return (
        <div className='account-container'>
            <div className='account-card'>
                <h1>{state}</h1>
                <div className="account-fields">
                    {
                        state === "Sign up"
                            ?
                            <div className='signup-fields'>
                                <input type="text" placeholder='First name' name="firstName" value={formData.firstName} onChange={changehandler} />{errors.firstName && (
                                    <p className='error-message'>{'*'}{errors.firstName}</p>
                                )}
                                <input type="text" placeholder='Last name' name="lastName" value={formData.lastName} onChange={changehandler} />{errors.lastName && (
                                    <p className='error-message'>{'*'}{errors.lastName}</p>
                                )}
                            </div>
                            :
                            <></>
                    }
                    <input type="email" placeholder='Email Address' value={formData.email} onChange={changehandler} name="email" />
                    {errors.email && (
                        <p className='error-message'>{'*'}{errors.email}</p>
                    )}
                    <input type="password" placeholder='Password' name="password" value={formData.password} onChange={changehandler} />{errors.password && (
                        <p className='error-message'>{'*'}{errors.password}</p>
                    )}
                </div>
                <button onClick={() => { state === 'Login' ? login() : signup() }}>{state}</button>
                {state === "Sign up" ?
                    <p className="account-login">
                        Already have an account ? <span onClick={() => setstate("Login")} >Login here</span>
                    </p> :
                    <p className="account-login">
                        Create an account <span onClick={() => setstate("Sign up")}>Click here</span>
                    </p>
                }
                <div className="account-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I agree to the terms of use & privacy </p>
                </div>
            </div>
        </div>
    )
}

export default Register
