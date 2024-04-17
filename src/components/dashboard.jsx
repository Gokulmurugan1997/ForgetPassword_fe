import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Topbar from './Topbar'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import useLogout from '../hooks/uselogout';
import { Table } from 'react-bootstrap';

function Dashboard() {
  let [data,setData] = useState([])

  let navigate = useNavigate()

  const getData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.USERS.path}`,{
        authenticate:ApiRoutes.USERS.authenticate
      })
      console.log(res.data.user)
      if(res.status===200)
      {
        setData(res.data.user)
      }
      
    } catch (error) {
      toast.error(error.response.data.message || error.message)
      if(error.response.status===402)
      useLogout()
    }
  }

  useEffect(()=>{
    getData()
  },[])
  
  return <>
  <Topbar/>
  <div className='wrapper'>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.status?"Active":"Inactive"}</td>
              <td>{e.createdAt}</td>
              <td><Button variant='info' onClick={()=>navigate(`/profile/${e._id}`)}>view</Button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
  </>
}

export default Dashboard