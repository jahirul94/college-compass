import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import './MyCollege.css'
import useCollege from "../../Hooks/useCollege";

const MyCollege = () => {
    const { user } = useAuth();
    const [colleges] = useCollege();
    const [review , setReview] = useState({});
    const [myColleges, setMyColleges] = useState([]);
    const url = `http://localhost:5000/myCollege?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(data => setMyColleges(data.data))
            .catch(err => console.log(err))
    }, [url])
    const ids = myColleges?.map(i => i.collegeId)
    const clg = colleges.filter(c => ids.includes(c._id))

    const handleSubmit = event => {
        event.preventDefault();
        const data = event.target.review.value;
        const date = new Date();
        const { email , displayName , photoURL } = user ;
        const newReview = {message: data , collegeId: review._id , collegeName : review.collegeName , email , displayName , photoURL , date}
        axios.post('http://localhost:5000/reviews' , newReview)
        .then(data => console.log(data.data))
        .catch(err => console.log(err))
    }



// TODO : make reviews /

    return (
        <div className="min-h-screen">
            <p></p>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    clg?.map(clg => <div key={clg._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={clg.collegeImage} alt="College Image" className="rounded-xl h-72 w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{clg.collegeName}</h2>
                            {/* <p>{myColleges?.map((s , i) => <span key={i}>Subject : {s.subject}</span>)}</p> */}
                            <p className="text-md font-semibold">Ratting : {clg.collegeRating}</p>
                            <p className="text-md font-semibold">Admission Date : {clg.admissionDate}</p>
                            <p className="text-md font-semibold">Write a Review : </p>
                            <form onSubmit={handleSubmit} className="mt-2 mb-4 flex">
                                <input type="text" placeholder="Write a Reviews" name="review" className="input input-bordered" required />
                                <input onMouseEnter={()=>setReview(clg)} type="submit" className="btn btn-outline" value="Send" />
                            </form>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCollege;