import { Link } from "react-router-dom";
import useCollege from "../../Hooks/useCollege";

const Admission = () => {
    const [colleges] = useCollege();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>College Name</th>
                        <th>Admission date</th>
                        <th>Ratting</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        colleges?.map((clg , i) => <tr key={i} className="bg-base-100">
                            <td>{i + 1}</td>
                            <td>{clg.collegeName}</td>
                            <td>{clg.admissionDate}</td>
                            <td>{clg.collegeRating}</td>
                            <td><Link to={`/admission/1`}><button className="btn btn-outline w-40">Apply</button></Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Admission;