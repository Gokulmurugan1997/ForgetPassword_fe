
const ApiRoutes ={
   LOGIN:{
    path:'/user/login',
    athenticate:false
   },
   SIGNUP:{
      path:'/user/signup',
      athenticate:false
   },
   USERS:{
      path:'/user',
      authenticate: true
   },
   FORGETPASSWORD:{
      path:'/user/forgetPassword',
      authenticate: false
   },
   RESETPASSWORD:{
      path:`/user/reset-password`,
      authenticate: false
   }

}

export default ApiRoutes