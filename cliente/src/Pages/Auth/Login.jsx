import React from "react";

import "../../style/Estilo_Login.css";
import "../../Media/fondo1.jpg";
import  GoogleLogin  from "react-google-login";


const Login = () => {
  const responseGoogle = (response) => {
  console.log(response);
}
  

  return (
    <div>
   
<GoogleLogin
  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
  onSuccess={responseGoogle}
  isSignedIn={true}
/>


    </div>
  );
};

export default Login;
