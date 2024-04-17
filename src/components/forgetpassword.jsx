import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes'

function Forgetpassword() {
  const [email, setEmail]= useState()
  useEffect(()=>{
    sessionStorage.clear()
  },[])
    const handleMail = async (e)=>{
            e.preventDefault()
        try {
          
              let res = await AxiosService.post(ApiRoutes.FORGETPASSWORD.path,{email})
            
            if(res.status==200){toast.success("mail sent")}
            else{toast.error("mail not sent")}
      
            
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

  return <div  className='login_wrapper'>
  <div className='login_header'>
  <h1>ForgetPassword</h1>

  </div>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleMail}>
      Submit
    </Button>

  </div>
}

export default Forgetpassword