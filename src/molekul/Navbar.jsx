import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className='nav-item'>
        <NavLink className='navlink'>
          <i className="fa-solid fa-globe"></i>
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink className='navlink'>
          About
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink className='navlink'>
          Projects
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink className='navlink'>
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar