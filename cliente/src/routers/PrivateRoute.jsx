import useAuth from 'Hook/useAuth';
import PrivateLayout from 'layouts/PrivateLayout'
import React from 'react'
import { Redirect, Route } from 'react-router'

// const user =null;
// const user = 1;

export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = useAuth();
    return (
        <PrivateLayout>
            <Route {...rest} >
            {auth.isLogged() ?
                <Component />
                : <Redirect to="/" />
            }
            </Route >

        </PrivateLayout>

    )
}
