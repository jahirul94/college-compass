import { useEffect, useRef, useState } from "react";
import useCollege from "../../../Hooks/useCollege";
import { Link } from "react-router-dom";
const DisplayColleges = () => {
    const ref = useRef();
    const [displayColleges, setDisplayColleges] = useState([]);
    const [colleges] = useCollege();


    useEffect(() => {
        setDisplayColleges(colleges.slice(0, 3))
    }, [colleges])

    const handleSearch = () => {
        const name = ref.current.value;
        const finedCollege = colleges.find(clg => clg.collegeName == name);
        if (finedCollege) {
            setDisplayColleges([finedCollege])
        }
    }

    // console.log(colleges);

    return (
        <div>
            <div className="my-4 flex justify-end">
                <input ref={ref} type="text" name="" id="" placeholder="Search College" className="w-1/3 input input-bordered" />
                <button onClick={handleSearch} className="btn btn-outline">Search</button>
            </div>
            <div>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        displayColleges?.map(clg => <div key={clg._id} className="card bg-base-100 shadow-xl">
                            <figure><img src={clg.collegeImage} alt="College image" className="h-80 w-full" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">{clg.collegeName}</h2>
                                <div>
                                    <p className="text-md font-semibold">Admission Date : {clg.admissionDate}</p>
                                    <div>
                                        <span className="text-md font-semibold">Events : </span>
                                        {
                                            clg.events?.map((ev, i) => <span key={i} className="text-sm">{ev}, </span>)
                                        }
                                    </div>
                                    <div>
                                        <span className="text-md font-semibold">Research History : </span><span className="text-sm">{clg.researchWorks}</span>
                                    </div>
                                    <div>
                                    <span className="text-md font-semibold">Sports : </span>
                                    {
                                        clg.sportsFacilities?.map((sp , i) =><span key={i} className="text-sm">{sp}, </span>)
                                    }
                                </div>
                                </div>
                                <div className="mt-2">
                                    <Link to={`/details/${clg._id}`}><button className="w-full btn btn-outline">View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisplayColleges;