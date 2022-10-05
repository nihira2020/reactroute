import { Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const EmployeeListing = () => {
    const { data, errordata, isloaded } = useFetch('http://localhost:8000/employee');
    // console.log(data);
    const navigate=useNavigate();
    const Redirectdetail=(id)=>{
        navigate('/empdetails/'+id)
    }
    const FunEdit=(id)=>{
        navigate('/editemployee/'+id)
    }
    return (
        <div>

            <div className="card" >
                <div className="card-body">
                    <Link className="btn btn-success" to="/addemployee">Add New</Link>
                    <h5 className="card-title">Employee Listing</h5>



                    {isloaded && <div>Please Wait</div>}
                    {errordata && <div>{errordata}</div>}


                    {data &&
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Role</td>
                                    <td>Salary</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.role}</td>
                                        <td>{item.salary}</td>
                                        {/* <td> <Link className="btn btn-primary" to={"/empdetails/" + item.id}>Details</Link></td> */}
                                        <td><button className="btn btn-primary" onClick={()=>{Redirectdetail(item.id)}}>Details</button> | 
                                        <button className="btn btn-primary" onClick={()=>{FunEdit(item.id)}}>Edit</button></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    }
                </div>
            </div>

        </div>
    );
}

export default EmployeeListing;