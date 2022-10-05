import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddEmployee = () => {
    // state variables
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [role, rolechange] = useState('');
    const [salary, salarychange] = useState(0);

    const navigate=useNavigate();

    // functions
    const handlesubmit = (e) => {
        e.preventDefault();
        const empobj = { name, role, salary };
        
        // console.log(empobj);

        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empobj)
        }).then(() => {
            //console.log("data added");
            navigate(-1);
        }).catch((err) => {
            console.log(err.message);
        })
    }



    return (
        <div>

            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h3>Add/Edit Employee</h3>
                        <div className="form-group">
                            <label>ID</label>
                            <input value={id} disabled="disabled" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input value={name} onChange={e => namechange(e.target.value)} className="form-control" required></input>
                            {name.length == 0 && <span className="errormessage"> Please enter the name</span>}
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <input value={role} onChange={e => rolechange(e.target.value)} className="form-control" required></input>
                            {role.length == 0 && <span className="errormessage"> Please enter the Role</span>}
                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input value={salary} onChange={e => salarychange(e.target.value)} className="form-control" ></input>

                        </div>
                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-success" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default AddEmployee;