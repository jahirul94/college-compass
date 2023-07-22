import useCollege from "../../../Hooks/useCollege";

const Gallery = () => {
    const [colleges] = useCollege();
    // console.log(colleges);
    return (
        <div className="min-h-screen my-10 pt-32">
            <div>
                <h2 className="text-4xl font-bold text-center mb-14 underline underline-offset-4">Academic Achievers</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    colleges?.map(clg => <div key={clg._id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={clg.gra_pic} alt="students pic" className="h-72"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{clg.collegeName}'s Dreamers</h2>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;