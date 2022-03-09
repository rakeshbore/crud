import React from 'react';               
import {Link} from 'react-router-dom';
const NavBar = () => {
  return( <>
  
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-sm-12'>
                  <nav className='navbar navbar-expand-sm bg-dark'>
                      <h1 className='navbar-brand text-white'>Navbar</h1>
                    <ul className='navbar-nav'>
                    <li className='nav-item'>
                            <Link className='nav-link text-white' to="/home">Home</Link>
                        </li>   
                        <li className='nav-item'>
                            <Link className='nav-link text-white' to="edituser">about</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-white btn btn-success' to="/Add">AddUser</Link>
                        </li>
                        </ul>  
                    
                  </nav>
                  </div>
              </div>
          </div>
  </>
      
  )};

export default NavBar;
