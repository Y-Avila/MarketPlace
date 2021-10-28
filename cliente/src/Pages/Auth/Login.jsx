
import Logo from 'components/Logo'
import React from 'react'
import '../../style/Estilo_Login.css';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import useAuth from 'Hook/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const base_url = process.env.REACT_APP_RUTA_SERVER;


const Login = () => {
  const auth = useAuth();
  const responseGoogle = async (resp) => {
    

    // const { status, data } = await axios({
    try {
        const {status, data } = await axios({
        method:'POST',
        url: `${base_url}auth/google/login`,
        headers: {
          'Authorization': `Bearer ${resp.tokenId}`
        } 
      });
      // console.log(data);
      if (status === 200){
        auth.setToken(data.token); 
      auth.setUser({ uid: data.uid, name: data.name, rol: data.rol });
      }else if (status === 201){
        toast.success('Usuario creado de manera exitosa, para poder acceder comuniquese con el administrador');
      }
    } catch (error) {
      
      if (error.response.status === 401){
        toast.warning('El usuario aun no ha sido autorizado por el administrador');
      }else{
        toast.error('error al autenticar')
      }
      
    }

  }

  return (
    <> 
    <div className="login-container">
      <span className="titulo">Bienvenido a </span>
      <span className="titulo">Tu Tienda Virtual!!!</span>
        <Logo className="logo-login" />
        <GoogleLogin
          className="google-title"
          clientId="189969886796-cch6jmqtcpc2vpe0ho61tldej4bn1pnk.apps.googleusercontent.com"
          buttonText="Iniciar sesion con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

      </div>
      <ToastContainer position="bottom-center" autoClose={6000} />
    </>
      
    
  )
}

export default Login


