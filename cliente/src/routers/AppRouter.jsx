import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Usuarios from "Pages/Admin/Usuarios";
import Producto from "Pages/Admin/Producto";
import Editar from "Pages/Admin/EditarProducto";
import Login from "Pages/Auth/Login";
import Index from "Pages/Admin/Index";
import Ventas from "Pages/Admin/Ventas";
import NuevoUsuarios from "Pages/Admin/NuevoUsuarios";
import PagError from "Pages/Auth/PagError";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import VendedorRoute from "./VendedorRoute";
import RegistrarProductos from "Pages/Admin/RegistrarProductos";
import VentasRegistrar from "Pages/Admin/VentasRegistar";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <VendedorRoute exact path="/admin/usuarios/crear" component={NuevoUsuarios} />

                <VendedorRoute exact path="/admin/usuarios" component={Usuarios} />

                <PrivateRoute exact path="/admin/ventas/facturar" component={VentasRegistrar} />

                <PrivateRoute exact path="/admin/ventas" component={Ventas} />

                <VendedorRoute exact path="/admin/productos/editar" component={Editar} />

                <VendedorRoute exact path="/admin/productos/crear" component={RegistrarProductos} />

                <VendedorRoute exact path="/admin/productos" component={Producto} />

                <PrivateRoute exact path="/admin/" component={Index} />
                <PublicRoute exact path="/" component={Login} />
                <Route path="*" component={PagError} />
            </Switch>
        </Router>
    )
}