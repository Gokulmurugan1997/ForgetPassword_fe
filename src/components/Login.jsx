import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes'

function Login() {
  let navigate = useNavigate()

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      let formData = new FormData(e.target)
      let data = Object.fromEntries(formData)

    if(data.email && data.password){
      let res = await AxiosService.post(ApiRoutes.LOGIN.path,data,{
        authenticate:ApiRoutes.LOGIN.athenticate
      })
        
      if(res.status===200){
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('role', res.data.role)
        sessionStorage.setItem('name', res.data.name)
        sessionStorage.setItem('userId', res.data.id)
        toast.success(res.data.message)
        if(res.data.role==='admin')
          navigate('/dashboard')
        
        else{
          navigate(`/profile/${res.data.id}`)
        }
      }
    }
      else
      {
        toast.error("Input email and password")
      }
    
     
    } catch (error) {  
      toast.error(error.response.data.message || error.message)
    }
  }
  return <div  className='login_wrapper'>
    <div className='login_header'>
    <h1>Login</h1>
    <p>New User? don't worry <Link to='/SignUp'>Sign Up here</Link></p>
    </div>
  <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button><p> <Link to='/forgetpassword'>forgetpassword?</Link></p>
      
    </Form>

    </div>
}

export default Login