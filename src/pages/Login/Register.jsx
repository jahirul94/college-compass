import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name , email: data.email , image : data.photo }
                        axios.post('http://localhost:5000/users' , saveUser)
                        .then(data => console.log(data.data))
                        .catch(err => console.log(err))
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(err => setError(err.message))
            })
            .catch(err => {
                setError(err.message)
            })
    };



    return (

        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/3">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Please provide us with some basic information so we can personalize your experience. You'll be asked to enter your name, email address,picture url  and a unique password that ensures the privacy and security of your account. We value your privacy and assure you that your information will be handled with utmost care, following the strictest data protection standards.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold">Password</span>
                            </label>
                            <input type="password" {...register("password", { minLength: 6 })} placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        </div>
                        <p className="text-red-600">{error}</p>
                        <p> Already have an Account ? <Link to="/login">Login</Link></p>
                        <input className="btn btn-primary" type="submit" value="Sign up" />
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>);

};

export default Register;