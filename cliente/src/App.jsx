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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route
            path={[
             
              "/ventas",
              "/usuarios/actualizar",
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

            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/ventas/facturar">
              <Facturar />
            </Route>
            <Route path="/ventas">
              <Ventas />
            </Route>

            <Route path="/producto/editar">
              <Editar />
            </Route>

            <Route path="/productos/registrar">
              <Registrar />
            </Route>

            <Route path="/productos">
              <Producto />
            </Route>
            <Route path="/index">
              <Index />
            </Route>
          </PrivateLayout>

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
