import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Empdetails = () => {
    const { id } = useParams();
    const { data, errordata, isloaded } = useFetch('http://localhost:8000/employee/' + id)
    // console.log(data);
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
            </div>}
        </div>
    );
}

export default Empdetails;