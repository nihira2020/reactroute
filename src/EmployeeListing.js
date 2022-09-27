import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const EmployeeListing = () => {
    const { data, errordata, isloaded } = useFetch('http://localhost:8000/employee');
    // console.log(data);
    return (
        <div>

            {isloaded && <div>Please Wait</div>}
            {errordata && <div>{errordata}</div>}
            {data &&
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>DOB</td>
                            <td>Salary</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.salary}</td>
                                <td> <Link to={"/empdetails/" + item.id}>Details</Link></td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            }

        </div>
    );
}

export default EmployeeListing;