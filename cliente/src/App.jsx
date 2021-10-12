import "./App.css";
import Usuarios from "Pages/Usuarios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Actualizar from "Pages/ActualizarUsuarios";
import Producto from "Pages/Producto";
import Editar from "Pages/EditarProducto";
import Registrar from "Pages/RegistrarProductos";
import Login from "Pages/Login";
import Index from "Pages/Index";
import Ventas from "Pages/Ventas";
import Facturar from "Pages/Facturar";
import NuevoUsuarios from "Pages/NuevoUsuarios";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "ventas/facturar",
              "/ventas",
              "/usuarios/actualizar",
              "/usuarios/crear",
              "/usuarios",
              "/productos",
              "/productos/registrar",
              "/producto/editar",
              "/login",
              "/"
            ]}
          >
            <Switch>
              <PrivateLayout>
                <Route path="/usuarios/actualizar">
                  <Actualizar />
                </Route>
                <Route path="/usuarios/crear">
                  <NuevoUsuarios />
                </Route>

                <Route exact path="/usuarios">
                  <Usuarios />
                </Route>
                <Route exact path="/ventas/facturar">
                  <Facturar />
                </Route>
                <Route exact path="/ventas">
                  <Ventas />
                </Route>

                <Route exact path="/producto/editar">
                  <Editar />
                </Route>

                <Route exact path="/productos/registrar">
                  <Registrar />
                </Route>

                <Route exact path="/productos">
                  <Producto />
                </Route>
                <Route exact path="/">
                  <Index />
                </Route>
              </PrivateLayout>
            </Switch>
          </Route>
          <Route path={[
             "/login"
            ]}>
            <Switch>
              <AuthLayout>
                <Route path="/login">
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
