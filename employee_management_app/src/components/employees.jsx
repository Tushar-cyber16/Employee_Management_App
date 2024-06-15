import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios, * as others from 'axios';
import {Link} from "react-router-dom";

const Employees = ({Data,getallemployees}) => {

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/employee/${id}`);
      console.log('Employee deleted:', response.data);
      // Handle any UI updates or state management after successful delete
      getallemployees();
  } catch (error) {
      console.error('Error deleting employee:', error);
     }


  }

    return (
      
    <div>

    <Table striped bordered hover style={{marginTop : "10px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Id</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       { Data.map( (data,index) => {
        return (
           <tr key={data.aid}>
           <td>{index+1}</td>
           <td>{data.aid}</td>
           <td>{data.name}</td>
           <td>{data.email}</td>
           <td>
           <Link to={{
                pathname: `/updateemployee/${data.aid}`,
            }}>
           <Button style={{ marginLeft: '6px' }} variant="warning">Update</Button>
           </Link>

           <Button onClick={() => deleteEmployee(data.aid)} style={{ marginLeft: '10px' }} variant="danger">
            Delete</Button>
           </td>
              </tr>
        )
        
       }   ) }
      </tbody>
    </Table>
      </div>
    );

}

export default Employees