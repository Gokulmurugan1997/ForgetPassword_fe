import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes'

function SignUp() {
  let navigate = useNavigate()

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const handleSignin=async(e)=>{
    e.preventDefault()
    try {
      let formData = new FormData(e.target)
      let data = Object.fromEntries(formData)

    if(data.email && data.password && data.name){
      let res = await AxiosService.post(ApiRoutes.SIGNUP.path, data,{
        authenticate: ApiRoutes.SIGNUP.athenticate
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
          navigate(`/login`)
      }
    }
      else
      {
        toast.error("Input Name, email and password")
      }
    
     
    } catch (error) {  
      toast.error(error.response.data.message || error.message)
    }
  }
  return <div  className='login_wrapper'>
    <div className='login_header'>
    <h1>Signin</h1>
    </div>
  <Form onSubmit={handleSignin}>
  <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Name" name='name'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
}


export default SignUp