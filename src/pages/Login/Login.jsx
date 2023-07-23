import { useState } from "react";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const [error, setError] = useState("")
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire(
                    'Done!',
                    'Your Account Login Successfully.',
                    'success'
                )
                setError('')
                reset();
                navigate("/")
            })
            .catch(err => {
                setError(err.message);
            })
    };


    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/3">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">To securely access your account, please enter your registered email address and password in the designated fields. We take your privacy seriously and employ industry-standard encryption protocols to protect your sensitive information. Rest assured that your login credentials are safe with us.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                            <p className="text-red-600 my-2">{error}</p>
                        </div>
                        <input className="btn btn-outline" type="submit" value="Login" />
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="ms-8 mb-4">
                        <button onClick={() => window.my_modal_3.showModal()}><p className="text-red-600 underline">Forget Password</p></button>
                        <p> New at here ? <Link to="/register">Sign Up </Link></p>
                    </div>
                </div>
            </div>
            {/* modal start  */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <input type="email" name="email" id="" />
                    <button className="btn btn-outline">Send</button>
                </form>
            </dialog>
            {/* modal end  */}


        </div>
    );
};

export default Login;