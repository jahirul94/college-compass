import { Link } from "react-router-dom";
import useCollege from "../../Hooks/useCollege";

const Admission = () => {
    const [colleges] = useCollege();
    return (
    <div className="min-h-screen">
        <p className="text-center font-bold text-2xl mt-20 mb-8 underline underline-offset-4">Apply Your Favorite College</p>
        {
            colleges?.map((clg , i )=> <div className="p-4 my-4 border border-spacing-4" key={clg._id}>
               <span className="text-lg font-semibold">{i + 1} </span>.
                 <Link className="text-lg font-semibold" to={`/admission/${clg._id}`}>{clg.collegeName}</Link>
            </div>)
        }
    </div>
    );
};

export default Admission;