import React from 'react';
import Navbar from "../components/navbar";
import Employees from "../components/employees";
import axios, * as others from 'axios';
import { useEffect,useState } from 'react';
const Home =  () => {

    const [data,setData]=useState([]);
  
    const getallemployees = async () => {
        // await axios
        // .get("http://localhost:8080/employee")
        // .then(function (res) {
        //   console.log(res.data);
        //   setData(res.data);
        // });

        try {
            const response = await axios.get("http://localhost:8080/employee");
            setData(response.data);
          } catch (error) {
            console.error('Error fetching employees:', error);
          }
       }


useEffect( () => {
   getallemployees();
}, []);

    return(  
    <div>
        <Navbar/>
        <Employees Data = {data} getallemployees={() => getallemployees()}/>

   </div>
    );
}

export default Home