import useAuth from 'Hook/useAuth';
import AuthLayout from 'layouts/AuthLayout'
import React from 'react'
import { Redirect, Route } from 'react-router'

export default function PublicRoute({ component: Component, ...rest }) {
    
    const auth = useAuth();
    
    return (
        <AuthLayout>
        <Route {...rest} >
        {!auth.isLogged() ?
                <Component />
                : <Redirect to="/admin" />
            }
            
        </Route>
        </AuthLayout>
        
    )
}
