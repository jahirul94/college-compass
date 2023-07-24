import axios from "axios";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import './MyCollege.css'
import useCollege from "../../Hooks/useCollege";
import useMyColleges from "../../Hooks/useMyColleges";
import useTitle from "../../Hooks/useTitle";

const MyCollege = () => {
    useTitle("My College")
    const { user } = useAuth();
    const [colleges] = useCollege();
    const [review, setReview] = useState({});
    const myColleges = useMyColleges();
    const [clg] = colleges.filter(c => c._id === myColleges.collegeId)


    const handleSubmit = event => {
        event.preventDefault();
        const data = event.target.review.value;
        const date = new Date();
        const { email, displayName, photoURL } = user;
        const newReview = { message: data, collegeId: review._id, collegeName: review.collegeName, email, displayName, photoURL, date }
        axios.post('https://college-compass-server.vercel.app/reviews', newReview)
            .then(data => console.log(data.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="min-h-screen">
           { myColleges && <div className="card lg:card-side bg-base-100 shadow-xl w-full">
                <figure><img src={clg?.collegeImage} alt="College Image" className="rounded-xl p-4 w-full h-96" /></figure>
                <div className="card-body w-full lg:w-2/3">
                    <h2 className="text-3xl font-bold">{clg?.collegeName}</h2>
                    <h3 className="text-md font-semibold">Ratting : {clg?.collegeRating}</h3>
                    <h3 className="text-md font-semibold">Admission Date : {clg?.admissionDate}</h3>
                    <h3 className="text-md font-semibold">Write a Review : </h3>
                    <form onSubmit={handleSubmit} className="mt-2 mb-4 flex">
                        <input type="text" placeholder="Write a Reviews" name="review" className="input input-bordered" required />
                        <input onMouseEnter={() => setReview(clg)} type="submit" className="btn btn-outline" value="Send" />
                    </form>
                </div>
            </div>}
        </div>
    );
};

export default MyCollege;