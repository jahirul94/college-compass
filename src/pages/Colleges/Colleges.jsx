import { Link } from "react-router-dom";
import useCollege from "../../Hooks/useCollege";
import useTitle from "../../Hooks/useTitle";
import { RotatingLines } from "react-loader-spinner";

const Colleges = () => {
    useTitle("Colleges")
    const [colleges, loading] = useCollege();
    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><RotatingLines
        strokeColor="gray"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
    /></div>
    }
    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                colleges?.map(clg => <div data-aos="fade-up" key={clg._id} className="card bg-base-100 shadow-xl">
                    <figure><img src={clg.collegeImage} alt="College image" className="h-80 w-full" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">{clg.collegeName}</h2>
                        <div>
                            <p className="text-md font-semibold">Ratting : {clg.collegeRating}</p>
                            <p className="text-md font-semibold">Admission Date : {clg.admissionDate}</p>
                            <p className="text-md font-semibold">Num Of Research: {clg.numOfResearch}</p>
                        </div>
                        <div className="mt-2">
                            <Link to={`/details/${clg._id}`}><button className="w-full btn btn-outline">View Details</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Colleges;