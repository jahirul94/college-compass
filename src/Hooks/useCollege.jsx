// import axios from "axios";
import { useEffect, useState } from "react";

const useCollege = () => {
    const [colleges, setColleges] = useState([])
    const [loading , setLoading ] = useState(true)
    useEffect(()=>{
        fetch('https://college-compass-server.vercel.app/all-college')
        .then(res => res.json())
        .then(data => {
            setColleges(data)
            setLoading(false)
        })
    },[])
    // axios.get("")
    //     .then(data => setColleges(data.data))
    return [colleges , loading]
};

export default useCollege;