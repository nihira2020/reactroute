import {Link} from 'react-router-dom'
const AppHeader = ({title}) => {
    return ( 
        <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <h4 className='text-light'>{title}</h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="" id="navbarNav">
      <ul class="navbar-nav text-right">
        <li class="nav-item">
        <Link className='nav-link active' to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/about">About us</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/employee">Employee</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
        // <div className="appheader">
        //     <span>{title}</span>
        //     <Link to="/home">Home</Link>
        //     <Link to="/contact">Contact</Link>
        //     <Link to="/about">About us</Link>
        //     <Link to="/employee">Employee</Link>
            
        // </div>
     );
}
 
export default AppHeader;