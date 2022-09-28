import {Link} from 'react-router-dom'
const AppHeader = ({title}) => {
    return ( 
        <div className="appheader">
            <span>{title}</span>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About us</Link>
            <Link to="/employee">Employee</Link>
            
        </div>
     );
}
 
export default AppHeader;