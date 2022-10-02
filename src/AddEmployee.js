import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddEmployee = () => {
    // state variables
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [role, rolechange] = useState('');

    // functions
    const handlesubmit = (e) => {
        e.preventDefault();
        const empobj = { id, name, role };
        console.log(empobj);
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