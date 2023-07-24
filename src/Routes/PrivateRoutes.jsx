import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><RotatingLines
            strokeColor="gray"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoutes;