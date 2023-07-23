import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="bg-purple-100 min-h-screen">
                <div className="text-center pt-40">
                    <p className="text-9xl font-bold text-purple-300">404</p>
                    <p className="text-5xl font-semibold mt-20">Page not found !</p>
                    <p className="my-4 text-lg font-semibold pt-4">Oops ! The page you are Looking for does not exist . </p>
                    <Link to="/"><button className="btn btn-outline btn-primary">GO back home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;