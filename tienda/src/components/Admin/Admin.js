import React, { useState } from 'react';
import './admin.css';

//compoenets
import AdminForm from './AdminForm';
import {AdminInfo} from './AdminInfo';

const Admin = ({ products }) => {
    
    const [navState, setNavState] = useState('form')
    const changeState = (navActive) => {setNavState(navActive)}

    return (
        <React.Fragment>
            <div className="row opciones-container">

                <div className="col-12 col-xs-4 col-md-3 col-lg-2 opciones-admin">
                    <h3 className="text-center mt-2" style={{ color: '#ffff' }}>ADMIN</h3>
                    <ul className="list-group">
                        <li className="list-group-item" onClick={() => changeState('form')}>CREATE/UPDATE</li>
                        <li className="list-group-item" onClick={() => changeState('info')}>INFO/MARKET</li>
                    </ul>
                </div>


                <div className="col-12 col-xs-8 col-md-9 col-lg-10 admin-edit">
                    {navState == 'form' && <AdminForm products={products} />}
                    {navState == 'info' && <AdminInfo products={products} />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;