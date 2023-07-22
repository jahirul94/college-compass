import { useParams } from "react-router-dom";
import useCollege from "../../Hooks/useCollege";
import { useForm } from "react-hook-form";

const AdmissionForm = () => {
    const [colleges] = useCollege();
    const { id } = useParams();
    const findCollege = colleges.find(clg => clg._id == id);
    console.log(findCollege);


    // image bb 
    const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`






    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="min-h-screen mt-20">
            <p className="py-4 mb-8 underline underline-offset-8 text-2xl font-bold text-center">For Apply to Admit {`${findCollege?.collegeName}`} filup Following Form</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Candidate Name : </p>
                        <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Subject : </p>
                        <input type="text" {...register("subject")} placeholder="Subject" className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Candidate Email :</p>
                        <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Candidate Phone number : </p>
                        <input type="number" {...register("phone")} placeholder="Your Phone Number" className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Date of birth : </p>
                        <input type="date" {...register("dateOfBirth")} placeholder="Your Date of birth" className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Address : </p>
                        <input type="text" {...register("address")} placeholder="Your Address" className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2"> Your image : </p>
                        <input type="file" {...register("photo")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="my-16 flex justify-center">
                    <input type="submit" value="submit" className="btn btn-outline w-2/4" />
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;