import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="align">
            <h1 className="errorpage">401 !</h1>
            <h2>The Requested page was not found</h2>
            <Link  to="/">Click Here to redirect Home</Link>
        </div>
     );
}
 
export default Error;