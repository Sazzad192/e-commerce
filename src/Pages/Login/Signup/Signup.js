import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Signup = () => {
    const {createSignin, updateUser}= useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError]= useState('');


    const handelSignup = data =>{
        createSignin(data.email, data.password)
        .then((result) => {
            setError('')
            updateUser({displayName:data.name})
            .then(() => {
                alert('Login Successfully')
              }).catch((error) => {
                setError(error)
              });
            })
    }

    return (
        <div className='mx-5' style={{marginTop:'250px'}}>
            <h4 className='text-center'>Authentication</h4>
            <form onSubmit={handleSubmit(handelSignup)}>
                <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">User Name</label>
                    <input type="text" {...register("name", { required: "Enter your Name" })} className="form-control" id="UserName"/>
                    {errors.name && <p className='text-danger' role="alert">{errors.name?.message}</p>}
                </div>

                <div className='mb-3'>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" {...register("email", { required: "Enter your email" })} className="form-control" id="email"/>
                    {errors.email && <p className='text-danger' role="alert">{errors.email?.message}</p>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" {...register("password", 
                            { required: "Enter your password", minLength: {value: 6, message: "Atlist 6 leter should be writen"}})} className="form-control" id="exampleInputPassword1"/>
                </div>
                {errors.password && <p className='text-danger' role="alert">{errors.password?.message}</p>}
                <p className='text-danger' role="alert">{error}</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Signup;