import React from 'react';
import './styles.css';
import ProductState from './context/Producto/productoState';
import UserState from './context/User/userState';

//React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootswatch/dist/united/bootstrap.min.css";

//Pages
import MainPage from './pages/MainPage';
import ProductoPage from './pages/ProductoPage';
import ProductosPage from './pages/ProductosPage';
import NotFoundPage from './pages/NotFoundPage';
import ConfirSubPage from './pages/confirmSub';

import AdminPage from './pages/AdminPage';

function App() {
  return (
    <React.Fragment>
      <ProductState>
        <Router>
          <Switch>

            <Route component={MainPage} path="/" exact />
            <Route component={ProductoPage} path={`/producto/:id`} exact />
            <Route component={ProductosPage} path={`/productos/:all?`} exact />

            <UserState>
              <Route component={AdminPage} path={`/admin`} exact />
            </UserState>

            <Route component={ConfirSubPage} path="/confirm/:token" exact />
            <Route component={NotFoundPage} path="*" exact />

          </Switch>
        </Router>
      </ProductState>
    </React.Fragment>
  );
}

export default App;
