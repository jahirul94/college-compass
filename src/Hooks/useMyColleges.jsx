import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyColleges = () => {
    const { user } = useAuth();
    const [myColleges, setMyColleges] = useState({});
    const url = `http://localhost:5000/myCollege?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(data => setMyColleges(data.data))
            .catch(err => console.log(err))
    }, [url])
    return myColleges ;
};

export default useMyColleges;