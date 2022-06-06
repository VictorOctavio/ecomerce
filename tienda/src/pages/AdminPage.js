import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductoContext from '../context/Producto/productoContext';
import userContext from '../context/User/userContext';

//Components
import Admin from '../components/Admin/Admin';
import AdminForm from '../components/Admin/NewProduct/AdminForm'

const AdminPage = () => {

    //States
    const [admin, setAdmin] = useState({ email: '', password: '' })

    // State Context
    const { getProducts, products } = useContext(ProductoContext);
    const { session, readSessionUserAdmin, loginAdmin } = useContext(userContext);

    useEffect(() => {
        readSessionUserAdmin();
        getProducts();
    }, []);

    // Functions inicio modo admin
    const onChangeAdmin = e => setAdmin({ ...admin, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault();
        loginAdmin(admin);
    }


    return (
        <React.Fragment>
            {!session ? (
                <div
                    style={{
                        background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
                        minHeight: '100vh', display: 'flex', justifyContent: 'center'
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ width: '30%', margin: 'auto' }}>
                        <h3 className='text-dark display-6'>Inciar Modo Admin</h3>
                        <input name='email' value={admin.email} className='form-control my-2' type='text' placeholder='Email' onChange={onChangeAdmin} />
                        <input name='password' value={admin.value} className='form-control my-2' type='password' placeholder='Password' onChange={onChangeAdmin} />
                        <button className='btn btn-dark btn-block' style={{ width: '100%' }}>Ingresar</button>
                    </form>
                </div>
            ) : (
                <Switch>
                    <div style={{ display: 'grid', gridTemplateColumns: '15% 85%', gridTemplateRows: '1fr' }}
                    >
                        <div>
                            <Route path=""> <Admin /> </Route>
                        </div>

                        <Route path=""><AdminForm products={products} /></Route>

                    </div>
                </Switch>
            )}




        </React.Fragment>
    )
}

export default AdminPage;