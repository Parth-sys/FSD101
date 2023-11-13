import React,{useState} from 'react';
import {Form,Container,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom';
import '../styles/Signup.css'
const Signup=()=>{


const[formdata,setformdata]=useState({
    name:"",
    email:"",
    password:"",

});


const handlechange = (e) => {
    const {name,value}=e.target
     setformdata({...formdata,[name]:value})
   }

  const handelsubmit=(e)=>{
e.preventDefault();
console.log(formdata)
}

    return(
           <Container>
            <h4>Registration Form</h4>
            <Form onSubmit={handelsubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formdata.name} onChange={handlechange} required></Form.Control>
                </Form.Group> 
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formdata.email} onChange={handlechange} required></Form.Control>
                </Form.Group> 
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formdata.password} onChange={handlechange} required></Form.Control>
                </Form.Group> 
                <Button variant='primary' type="submit">Register</Button>
                 <p>Alredy have an account?<Link to="/login">Login</Link> </p>
            </Form>
           </Container>
    )
}

export  default Signup;