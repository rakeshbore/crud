import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
const EditUser = () => {
  let navigate=useNavigate();
  let {id}=useParams();
  const[state,setState]=useState({
    name:"",
    username:"",
    email:"",
    phone:""
});
useEffect(()=>{
  loadUser();
},[]);

const update=(e)=>{
setState((state)=>({
 ...state,[e.target.name]:e.target.value
}))
}
let onsubmit=async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:5000/user/${id}`,state);
  navigate("/home");
}
 const loadUser=async()=>{
   const result= await axios.get(`http://localhost:5000/user/${id}`);
   setState(result.data);
 

 }
  return <div>
 <div className='container-fluid mt-2'>
              <div className='row'>
                  <div className='col-sm-4'>
                      <div className='card shadow-lg'>
                        <h1 className='card-title ml-2'>Edit user</h1>
                          <div className='card-body'>
        <form  onSubmit={onsubmit}>
        <div className="form-group">
      <label >Name</label>
      <input type="text" className="form-control "
        placeholder="Enter name" 
        onChange={update} 
        value={state.name} 
        name="name"/>
    </div>
    <div className="form-group">
      <label >username</label>
      <input type="text" className="form-control " 
      placeholder="Enter username"
      onChange={update} 
        value={state.username} 
         name="username"/>
    </div>
    <div className="form-group">
      <label >email</label>
      <input type="email" className="form-control " 
      placeholder="Enter email"
      onChange={update} 
        value={state.email}  
        name="email"/>
    </div>
    <div className="form-group">
      <label>phone</label>
      <input type="text" className="form-control " 
      placeholder="Enter phone" 
      onChange={update} 
        value={state.phone} 
        name="phone"/>
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>
    <input type="submit" className="btn btn-primary "value="submit"></input>
    <button type="submit" className="btn btn-warning ml-2"><Link className='text-white' to="/list">cancel</Link></button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>;
};

export default EditUser;
