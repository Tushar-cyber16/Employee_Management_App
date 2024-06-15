import React,{ useState,useEffect } from 'react';
import Navbar from "./navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios, * as others from 'axios';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {

    const { id } = useParams();
    const [formData, setFormData] = useState({
        aid:'',
        email: '',
        name: ''
    });

   useEffect( () => {

    const getById = async () => {
        const res = await axios.get(`http://localhost:8080/employee/${id}`)
     console.log(res.data);
     setFormData({aid:res.data.aid,name:res.data.name,email:res.data.email});
    }
    getById();
   }, [])
   
    
 

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }));
};

  const handleSubmit = async  (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("http://localhost:8080/employee", formData);
      console.log('Employee updated:', response.data);

      setFormData({
        aid:'',
        email: '',
        name: '',
    });
  } catch (error) {
      console.error('There was an error submitting the form:', error);
  }
         
  } 

    return (
        <div>
            <Navbar />
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <Row className="w-100">
                    <Col md={6} lg={4} className="mx-auto">
                        <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Employee Id</Form.Label>
                                <Form.Control 
                                name="id" 
                                type="text" 
                                value={formData.aid} disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                name="name" 
                                type="text" 
                                placeholder="Enter name" 
                                value={formData.name}
                                onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                name="email" 
                                type="email" 
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UpdateEmployee;
