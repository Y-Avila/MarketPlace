
import Usuarios from "Pages/Admin/Usuarios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Productos from "Pages/Admin/Productos";
import ProductosEditar from "Pages/Admin/ProductosEditar";
import ProductosRegistrar from "Pages/Admin/ProductosRegistrar";
import Login from "Pages/Auth/Login";
import Index from "Pages/Admin/Index";

import Ventas from "Pages/Admin/Ventas";
import VentasRegistrar from "Pages/Admin/VentasRegistrar";
import VentasEditar from "Pages/Admin/VentasEditar";

import NuevoUsuarios from "Pages/Admin/NuevoUsuarios";



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
              "/admin/productos",
              "/admin/productos/registrar",
              "/admin/productos/editar",
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
                <Route exact path="/admin/ventas/Registrar">
                  <VentasRegistrar />
                </Route>
                <Route exact path="/admin/ventas">
                  <Ventas />
                </Route>
                <Route exact path="/admin/ventas/Editar">
                  <VentasEditar />
                </Route>

                <Route exact path="/admin/productos/editar">
                  <ProductosEditar />
                </Route>

                <Route exact path="/admin/productos/registrar">
                  <ProductosRegistrar />
                </Route>

                <Route exact path="/admin/productos">
                  <Productos />
                </Route>
                <Route exact path="/admin/">
                  <Index />
                </Route>
              </PrivateLayout>
            </Switch>
          </Route>

          <Route  path={["/"]}>
            <Switch>
              <AuthLayout>
                <Route exact path="/">
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
