import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(result => {
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


    return (
        <div className='flex justify-center -mt-4 mb-5'>
            <button onClick={handleLoginWithGoogle} className='flex btn btn-outline w-[85%]'>Login With <FaGoogle className='text-xl'></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;