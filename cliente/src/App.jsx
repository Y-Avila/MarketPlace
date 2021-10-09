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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
            
              "/usuarios",
              "/usuarios/actualizar",
              "/productos",
              "/productos/registrar",
              "/producto/editar",
              "ventas",
              "/login", 
              "/"

            ]}
          >
            <Route path={["/","/ventas", "/usuarios", "/usuarios/actualizar"]}>
              <PrivateLayout>
                <Switch>
                  <Route path="/usuarios/actualizar">
                    <Actualizar />
                  </Route>
                  <Route path="/usuarios">
                    <Usuarios />
                  </Route>
                  <Route path="/ventas">
                    <Ventas />
                  </Route>
                  <Route path="/">
                    <Index />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>

            <Route
              path={["/productos", "/productos/registrar", "/producto/editar"]}
            >
              <PrivateLayout>
                <Switch>
                  <Route path="/producto/editar">
                    <Editar />
                  </Route>
                  <Route path="/productos/registrar">
                    <Registrar />
                  </Route>
                  <Route path="/productos">
                    <Producto />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            
            <Route path={["/login"]}>
              <AuthLayout>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
