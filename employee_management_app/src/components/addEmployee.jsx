import React,{ useState } from 'react';
import Navbar from "./navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios, * as others from 'axios';

const AddEmployee = () => {

  const [formData, setFormData] = useState({
    email: '',
    name: ''
});

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
      const response = await axios.post("http://localhost:8080/employee", formData);
      console.log('Form Submitted:', response.data);

      setFormData({
        email: '',
        name: ''
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

                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
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

export default AddEmployee;
