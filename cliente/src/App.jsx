
import Usuarios from "Pages/Admin/Usuarios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Producto from "Pages/Admin/Producto";
import Editar from "Pages/Admin/EditarProducto";
import Login from "Pages/Auth/Login";
import Index from "Pages/Admin/Index";
import Ventas from "Pages/Admin/Ventas";
import Facturar from "Pages/Admin/Facturar";
import NuevoUsuarios from "Pages/Admin/NuevoUsuarios";
import EditarProducto from "Pages/Admin/EditarProducto";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "/admin/ventas/facturar",
              "/admin/ventas",
              "/admin/usuarios/crear",
              "/admin/usuarios",
              "/admin/producto",
              "/admin/producto/crear",
              "/admin/producto/editar",
              "/admin/",
            ]}
          >
            <Switch>
             <PrivateLayout> 
                
                <Route path="/admin/usuarios/crear">
                  <NuevoUsuarios />
                </Route>
                <Route exact path="/admin/usuarios">
                  <Usuarios />
                </Route>
                <Route exact path="/admin/ventas/facturar">
                  <Facturar />
                </Route>
                <Route exact path="/admin/ventas">
                  <Ventas />
                </Route>
                <Route exact path="/admin/producto/editar">
                  <Editar />
                </Route>
                <Route exact path="/admin/producto/crear">
                  <EditarProducto/>
                </Route>
                <Route exact path="/admin/producto">
                  <Producto />
                </Route>
                <Route exact path="/admin/">
                  <Index />
                </Route>
              </PrivateLayout>
            </Switch>
          </Route>

          <Route  path={["/login"]}>
            <Switch>
              <AuthLayout>
                <Route exact path="/login">
                  <Login />
                </Route>
              </AuthLayout>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
