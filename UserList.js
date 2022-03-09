import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  return <div>
      <div className='container-fluid mt-2 ml-3'>
              <div className='row '>
                  <div className='col-sm-4'>
       <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Inbox 
      <div className='ml-auto'>
      <Link to="/" className='btn btn-success mr-2' >Edit</Link>
      <button type="button" className='btn btn-danger'>Delete</button>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Ads 
      <div className='ml-auto'>
      <Link to="/Add" className='btn btn-success mr-2' id="left">Edit</Link>
      <button type="button" className='btn btn-danger'>Delete</button>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Junk
      <div className='ml-auto'>
      <Link to="/Add" className='btn btn-success mr-2' id="left">Edit</Link>
      <button type="button" className='btn btn-danger'>Delete</button>
      </div>
    </li>
  </ul>
  </div>
  </div>
  </div>
</div>
};

export default UserList;
