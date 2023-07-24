// import axios from "axios";
import { useEffect, useState } from "react";

const useCollege = () => {
    const [colleges, setColleges] = useState([])
    useEffect(()=>{
        fetch('https://college-compass-server.vercel.app/all-college')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    // axios.get("")
    //     .then(data => setColleges(data.data))
    return [colleges]
};

export default useCollege;