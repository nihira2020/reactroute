import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Empdetails = () => {
    const { id } = useParams();
    const { data, errordata, isloaded } = useFetch('http://localhost:8000/employee/' + id)
    // console.log(data);
    const navigate=useNavigate();
    const backtolist=()=>{
        navigate(-1);
    }
    return (
        <div>
            {data && <div>
                <h2>
                    Employee Name is : {data.name} <i>({data.id})</i>
                </h2>
                <h3>
                    Date of Birth is : {data.dob}
                </h3>
                <h4> Salary is : {data.salary}</h4>
                <div>
                    <button className="btn btn-danger" onClick={backtolist}>Back to Listing</button>
                </div>
            </div>}
        </div>
    );
}

export default Empdetails;