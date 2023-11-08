import { NavLink } from "react-router-dom";
import { navItems } from "../data/data";

function Navbar() {
  return (
    <nav>
      <div className='nav-item'>
        <NavLink to={"/"} className='navlink'>
          <i className="fa-solid fa-globe"></i>
        </NavLink>
      </div>
      {navItems.map((item) => {
        return(
          <div key={item.id} className='nav-item'>
            <NavLink to={item.path} className='navlink'>
              {item.text}
            </NavLink>
          </div>
        );
      })}
    </nav>
  )
}

export default Navbar