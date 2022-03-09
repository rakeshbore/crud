import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";

const View = () => {
  const { id } = useParams();
const[state,setState]=useState([]);
   
   useEffect(() => {
    loadUser();
  }, []);
  const loadUser= async ()=>{
    const result= await axios.get(`http://localhost:5000/user/${id}`);
    setState(result.data);
  console.log(result)
 
  }
  return (
   <div>
     <table className=" table shadow table-stripped col-md-5 m-2 table-success">
       <tr>
         <td> name: <span className="text-danger ">{state.name}</span></td>
       </tr>
       <tr>
         <td> username: <span className="text-danger">{state.username}</span></td>
       </tr>
       <tr>
         <td> email: <span className="text-danger">{state.email}</span></td>
       </tr>
       <tr>
         <td> phone: <span className="text-danger">{state.phone}</span></td>
       </tr>
       
       </table>
  </div>
  );
};

export default View;
