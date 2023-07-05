import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import {BiLogIn} from "react-icons/bi"
const Navbarpage = () => {
  const navigate=useNavigate()
  
  return (
    <div>
    <div className="container-fluid">
      <nav className='navbar navbar-expand-lg bg-info'>
        <div className=' navbar navbar-brand text-white'>MED PLUS+</div>
        <div className="ml-auto">
          <ul className='navbar-nav'>
            {
              localStorage.getItem("token")  ?   <li className='nav-item' ><Link className='nav-link text-white' to={"/account"}>Account</Link></li>
              : <li className='nav-item'><Link to={"./Login"}  className='nav-link text-white' ><BiLogIn size={35}  />Login</Link>  </li>
            }
           
          </ul>
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbarpage
