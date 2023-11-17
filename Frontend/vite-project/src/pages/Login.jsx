import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {


    const [formdata, setformdata] = useState({
        email: "",
        password: "",

    });

    const handlechange = () => {
     const {name,value}=e.target
      setformdata({...formdata,[name]:value})
    }
 
 const handelsubmit=(e)=>{
e.preventDefault();
console.log(formdata)
}



    return (
        <Container>
            <h2>Login Form</h2>
            <Form onSubmit={handelsubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formdata.email} onChange={handlechange} required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formdata.password} onChange={handlechange} required></Form.Control>
                </Form.Group>
                <Button variant='primary' type="submit">Login</Button>
                 <p>Alredy have an account?<Link to="/signup">Signup</Link> </p>
            </Form>
        </Container>
    )
}

export default Login