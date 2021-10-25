import useAuth from 'Hook/useAuth';
import PrivateLayout from 'layouts/PrivateLayout';
import React from 'react'
import { Redirect, Route } from 'react-router'

// const user =null;
// const user = 1;

export default function VendedorRoute({ component: Component, ...rest }) {
    const auth = useAuth();
    return (
        <PrivateLayout>
            <Route {...rest} >
            {auth.isLogged() && auth.user.rol==="Administrador" ?
                <Component />
                : <Redirect to="/admin/ventas" />
            }
            </Route >

        </PrivateLayout>

    )
}
