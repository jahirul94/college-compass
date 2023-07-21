import axios from "axios";
import { useState } from "react";

const useCollege = () => {
    const [colleges, setColleges] = useState([])
    axios.get("allCollege.json")
        .then(data => setColleges(data.data))
    return [colleges]
};

export default useCollege;