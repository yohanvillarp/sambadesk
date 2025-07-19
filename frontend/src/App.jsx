import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

import Usuarios from './components/Usuarios';
import CrearUsuario from './pages/CrearUsuario';
import ListaUsuarios from './pages/ListaUsuarios';
import Grupos from './pages/Grupos';
import Equipos from './pages/Equipos';
import UnidadesOrganizativas from './pages/UnidadesOrganizativas';
import DNS from './pages/DNS';
import CrearGrupo from './pages/CrearGrupo';

import { ThemeProvider } from "@material-tailwind/react";
import { Routes, Route, Navigate } from 'react-router-dom';




function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/usuarios/crear"
          element={
            <PrivateRoute>
              <CrearUsuario />
            </PrivateRoute>
          }
        />
        <Route
          path="/usuarios/lista"
          element={
            <PrivateRoute>
              <ListaUsuarios />
            </PrivateRoute>
          }
        />

        <Route
          path="/grupos"
          element={
            <PrivateRoute>
              <Grupos />
            </PrivateRoute>
          }
        />
        <Route
          path="/grupos/crear"
          element={
            <PrivateRoute>
              <CrearGrupo />
            </PrivateRoute>
          }
        />

        <Route
          path="/equipos"
          element={
            <PrivateRoute>
              <Equipos />
            </PrivateRoute>
          }
        />
        <Route
          path="/unidades-organizativas"
          element={
            <PrivateRoute>
              <UnidadesOrganizativas />
            </PrivateRoute>
          }
        />
        <Route
          path="/dns"
          element={
            <PrivateRoute>
              <DNS />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}


export default App;
