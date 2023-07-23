import { Link } from "react-router-dom";
import useMyColleges from "../../Hooks/useMyColleges";
import useUser from "../../Hooks/useUser";
import { FaEdit } from 'react-icons/fa';

const User = () => {
    const displayUser = useUser();
    const myColleges = useMyColleges();
    return (
        <div className="min-h-screen">
            <div className="border border-spacing-2 shadow-md px-4 mt-4 lg:mt-20 lg:px-20">
                <div className="flex justify-center">
                    <img src={displayUser?.image} className="w-32 h-32 rounded-full mb-20 mt-8" alt="" />
                </div>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
                    <h3 className="text-lg font-bold">Full Name : <span className="font-semibold text-md"> {displayUser?.name}</span></h3>
                    <h3 className="text-lg font-bold">Email : <span className="font-semibold text-md"> {displayUser?.email}</span></h3>
                    <h3 className="text-lg font-bold">Address : <span className="font-semibold text-md"> {myColleges?.address}</span></h3>
                    <h3 className="text-lg font-bold">Date Of Birth : <span className="font-semibold text-md"> {myColleges?.dateOfBirth}</span></h3>
                    <h3 className="text-lg font-bold">College Name : <span className="font-semibold text-md"> {myColleges?.collegeName}</span></h3>
                    <h3 className="text-lg font-bold">Subject : <span className="font-semibold text-md"> {myColleges?.subject}</span></h3>
                </div>
                <div className="my-8 flex justify-center">
                   <Link to="/userDetails"><button className="btn btn-outline lg:my-20 mx-4 w-1/2"><FaEdit></FaEdit> Edit Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default User;