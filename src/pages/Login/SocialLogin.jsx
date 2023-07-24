import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaGitAlt, FaGithubAlt, FaGoogle } from 'react-icons/fa';
import axios from "axios";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL }
                axios.post('https://college-compass-server.vercel.app/users', saveUser)
                    .then(data => console.log(data.data))
                    .catch(err => console.log(err))
                Swal.fire(
                    'Done!',
                    'Your Account Login Successfully.',
                    'success'
                )
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleLoginWithGithub = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='-mt-4 mb-5 space-x-3 mx-auto lg:flex justify-center'>
            <button onClick={handleLoginWithGoogle} className='flex btn btn-outline mb-2'>Login With <FaGoogle className='text-xl'></FaGoogle></button>
            <button onClick={handleLoginWithGithub} className='flex btn btn-outline'>Login With <FaGithubAlt className='text-xl'></FaGithubAlt></button>
        </div>
    );
};

export default SocialLogin;