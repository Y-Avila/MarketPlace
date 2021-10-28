
import React from "react";
import { useEffect, useState } from 'react';
import '../../style/Estilo_Login.css';
import '../../Media/fondo1.jpg';
import Logo from "components/Logo";



const googleClientId = process.env.REACT_APP_GOOGLE_CLIENTE_ID;



const loadGoogleScript = () => {

  (function () {
    const id = 'google-js';
    const src = 'https://apis.google.com/js/platform.js';

    const firstJs = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) { return; }
    const js = document.createElement('script');
    js.id = id;
    js.src = src;
    js.onload = window.onGoogleScriptLoad;
    firstJs.parentNode.insertBefore(js, firstJs);
  }());

}

const Login = () => {

  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();

  const onSuccess = (googleUser) => {
    
    
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
    
  };

  const onFailure = () => {
    setIsLoggedIn(false);
  };

  const logOut = () => {
    (async () => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };

  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }


  useEffect(() => {
    window.onGoogleScriptLoad = () => {

      const _gapi = window.gapi;
      setGapi(_gapi);

      _gapi.load('auth2', () => {
        (async () => {
          const _googleAuth = await _gapi.auth2.init({
            client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }

    loadGoogleScript();

  },);




  return (
    <div className="login-container">
      <Logo className="logo-login"/>
        
        {!isLoggedIn &&
          <div id="google-signin"></div>
        }

        {isLoggedIn &&
          <div>
            <div>
              <img src= {imageUrl} alt='foto de perfil' className='foto-perfil' />
            </div>
            <div>{name}</div>
            <div>{email}</div>
            <button className='btn-primary' onClick={logOut}>Log Out</button>
          </div>
         
        }
    
    </div>
  );

};

export default Login;
