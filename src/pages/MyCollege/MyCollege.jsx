import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import './MyCollege.css'

const MyCollege = () => {
    const { user } = useAuth();
    const [myColleges, setMyColleges] = useState([]);
    const url = `http://localhost:5000/myCollege?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(data => setMyColleges(data.data))
            .catch(err => console.log(err))
    }, [url])
    console.log(myColleges);


    return (
        <div className="min-h-screen">
            <p></p>
            <div>
                {
                    myColleges?.map(clg => <div key={clg._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">College Name : {clg.collegeName}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default MyCollege;