import axios from "axios";
import { useEffect, useState } from "react";

const Reviews = () => {
    const [reviews , setReviews] = useState([]);

    useEffect(()=>{
         axios.get('http://localhost:5000/reviews')
         .then(data => setReviews(data.data))
    },[])

    return (
        <div className="mt-20 border border-spacing-2 p-8 shadow-lg">
            <div>
                <h3 className="text-4xl font-bold text-center underline underline-offset-4 mb-20">Our Latest Reviews</h3>
            </div>
            <div className="my-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {
                reviews?.map(review =>  <div key={review._id} className="text-center border p-4 shadow-md">
                <div className="flex justify-center mb-10">
                    <img src={review.photoURL} className="w-20 h-20 rounded-full" alt="user photo" />
                </div>
                <h2 className="text-2xl font-bold mb-4">About {review.collegeName}</h2>
                <p className="font-semibold">{review.message}</p>
            </div>)
               }
            </div>
        </div>
    );
};

export default Reviews;