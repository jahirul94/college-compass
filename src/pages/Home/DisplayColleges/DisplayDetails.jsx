import { useParams } from "react-router-dom";
import useCollege from "../../../Hooks/useCollege";


const DisplayDetails = () => {
    const [colleges] = useCollege();
    const { id } = useParams();
    const college = colleges.find(clg => clg._id === id)
    return (
        <div className="min-h-screen">
            {
                college && <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={college.collegeImage} alt="college image" className="img-details"/></figure>
                <div className="card-body">
                    <h2 className="detail-title my-4">{college.collegeName}</h2>
                    <div>
                        <span className="text-lg font-bold">Admission Process</span> : <span>{college.admissionProcess}</span>
                    </div>
                    <div>
                        <span className="text-lg font-bold">Event Details </span> : <span>{college.eventsDetails}</span>
                    </div>
                    <div>
                        <span className="text-lg font-bold">Research Works</span> : <span>{college.researchWorks}</span>
                    </div>
                    <div>
                        <span className="text-lg font-bold">Sports Categories</span> : <span>{college.sportsCategories}</span>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default DisplayDetails;