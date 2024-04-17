import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Dashboard from "../components/dashboard"
import Profile from "../components/Profile"
import Forgetpassword from "../components/forgetpassword"
import ResetPassword from "../components/ResetPassword"
import { Navigate} from "react-router-dom"

const AppRoutes = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/profile/:id',
        element:<Profile/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:"*",
        element:<Navigate to='login'/>
    },
    {
        path:'/forgetpassword',
        element:<Forgetpassword/>
    },
    {
        path:'/reset-password/:token',
        element:<ResetPassword/>
    }
]

export default AppRoutes
