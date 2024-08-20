import axios from "axios";

const AxiosService = axios.create(
    {baseURL:"https://forgetpassword-be.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }}
)

AxiosService.interceptors.request.use(config=>{
    let token = sessionStorage.getItem('token')

    if(config.authenticate===true && token)
    {
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
})


export default AxiosService