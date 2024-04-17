import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes'

function ResetPassword() {
  const [password, setPassword]= useState()
const {token} = useParams()
useEffect(()=>{
  sessionStorage.clear()
},[])

    const handleMail = async (e)=>{
      e.preventDefault()
        try {

              let res = await AxiosService.post(ApiRoutes.RESETPASSWORD.path,{password,token})
            
            if(res.status==200){toast.success("Password changed")}
            else{toast.error("Something wrong")}
      
            
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

  return <div  className='login_wrapper'>
  <div className='login_header'>
  <h1>ResetPassword</h1>

  </div>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>New Password</Form.Label>
      <Form.Control type="password" placeholder="Enter New password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleMail}>
      Submit
    </Button>

  </div>
}

export default ResetPassword