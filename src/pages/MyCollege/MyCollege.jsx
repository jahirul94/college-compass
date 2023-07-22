import axios from "axios";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyCollege = () => {
    const {user} = useAuth();
    const [myCollege , setMyCollege] = useState([]);
    axios.get(`http://localhost:5000/myCollege?email=${user?.email}`)
    .then(data => setMyCollege(data.data))
    .catch(err => console.log(err))
    console.log(myCollege);
    return (
        <div>
            
        </div>
    );
};

export default MyCollege;