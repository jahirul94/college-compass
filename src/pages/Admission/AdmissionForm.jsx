import { useParams } from "react-router-dom";
import useCollege from "../../Hooks/useCollege";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AdmissionForm = () => {
    const [colleges] = useCollege();
    const {user} = useAuth();
    // console.log(user);
    const { id } = useParams();
    const findCollege = colleges.find(clg => clg._id == id);

    // image hosting url 
    const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`


    const { register, handleSubmit, reset , formState: { errors } } = useForm();

    const onSubmit = data => { 
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imageRes => {
            if(imageRes.data.display_url){
                const imgURL = imageRes.data.display_url ;
                const { name , subject , email , phone , dateOfBirth , address } = data ;
                const newApplication = { name  , subject , email , phone , image: imgURL , dateOfBirth , address , collegeName:findCollege?.collegeName , collegeId : findCollege?._id , }
                axios.post("http://localhost:5000/myCollege" , newApplication)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your Application Submitted Successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }})
            }
        })

    };

    return (
        <div className="min-h-screen mt-20">
            <p className="py-4 mb-8 underline underline-offset-8 text-2xl font-bold text-center">For Apply to Admit {`${findCollege?.collegeName}`} filup Following Form</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Candidate Name : </p>
                        <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered w-full" required/>
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Subject : </p>
                        <input type="text" {...register("subject")} placeholder="Subject" className="input input-bordered w-full" required />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Candidate Email :</p>
                        <input type="email" {...register("email")} defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly/>
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Candidate Phone number : </p>
                        <input type="number" {...register("phone")} placeholder="Your Phone Number" className="input input-bordered w-full" required />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Date of birth : </p>
                        <input type="date" {...register("dateOfBirth")} placeholder="Your Date of birth" className="input input-bordered w-full" required />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2">Address : </p>
                        <input type="text" {...register("address")} placeholder="Your Address" className="input input-bordered w-full" required />
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold mb-2"> Your image : </p>
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs"  required/>
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