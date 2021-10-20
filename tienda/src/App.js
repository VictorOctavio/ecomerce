import React from 'react';
import './styles.css';
import ProductState from './context/Producto/productoState';
//React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootswatch/dist/united/bootstrap.min.css";
//Pages
import MainPage from './pages/MainPage';
import ProductoPage from './pages/ProductoPage';
import ProductosPage from './pages/ProductosPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import ConfirSubPage from './pages/confirmSub';

function App() {
  return (
    <React.Fragment>
      <ProductState>
        <Router>
          <Switch>

            <Route component={MainPage} path="/" exact />
            <Route component={ProductoPage} path={`/producto/:id`} exact />
            <Route component={ProductosPage} path={`/productos/:all?`} exact />
            <Route component={AdminPage} path={`/admin`} exact />
            <Route component={ConfirSubPage} path="/:token"/>
            <Route component={NotFoundPage} path="*"/>
        

          </Switch>
        </Router>
      </ProductState>
    </React.Fragment>
  );
}

export default App;
