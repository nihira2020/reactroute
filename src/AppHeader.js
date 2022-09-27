import {Link} from 'react-router-dom'
const AppHeader = () => {
    return ( 
        <div className="appheader">
            
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About us</Link>
            <Link to="/employee">Employee</Link>
        </div>
     );
}
 
export default AppHeader;