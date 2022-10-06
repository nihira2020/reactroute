import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
    // state variables
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [role, rolechange] = useState('');
    const [salary, salarychange] = useState(0);
    const { empid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/employee/' + empid).then((res) => {
            return res.json();
        }).then((res) => {
            // console.log(res);
            idchange(res.id);
            namechange(res.name);
            rolechange(res.role);
            salarychange(res.salary);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();
        const empobj = { id, name, role, salary };

        // console.log(empobj);

        fetch("http://localhost:8000/employee/" + id, {
            method: "PUT",
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

export default EditEmployee;