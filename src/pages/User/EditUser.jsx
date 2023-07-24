import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useCollege from "../../Hooks/useCollege";
import axios from "axios";
import Swal from "sweetalert2";

const EditUser = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [colleges] = useCollege();
    // console.log(colleges);

    const onSubmit = data => {
        const { name, email, address, college, subject } = data;
        const collegeDetails = colleges.find(c => c.collegeName == college)
        const newAdmission = { name, email, address, college, collegeId: collegeDetails._id, subject }
        axios.patch('https://college-compass-server.vercel.app/userDetails', newAdmission)
            .then(data => {
                if (data.data[0].modifiedCount > 0) {
                    Swal.fire(
                        'Update!',
                        'Your Details Updated.',
                        'success'
                    )
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="min-h-screen mt-20">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:w-full lg:w-1/3 mx-auto space-y-4">
                    <div>
                        <p className="text-lg font-semibold mb-2">Your Name : </p>
                        <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">Your Email : <span className="text-xs">{"("}Email Address cannot be changed{")"}</span></p>
                        <input type="email" {...register("email")} defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">University : </p>
                        <div className="form-control w-full">
                            <select {...register("college")} className="select select-bordered">
                                {
                                    colleges?.map(c => <option key={c._id}>{c.collegeName}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">Subject : </p>
                        <input type="text" {...register("subject")} placeholder="Subject" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">Address : </p>
                        <input type="text" {...register("address")} placeholder="Your Address" className="input input-bordered w-full" required />
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Update" className="btn btn-outline mt-4 w-full" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUser;