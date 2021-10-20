import React from 'react';
import './admin.css';

//compoenets
import AdminForm from './AdminForm';

const Admin = ({products}) => {
    return (
        <React.Fragment>
            <div className="row opciones-container">

                <div className="col-12 col-xs-4 col-md-3 col-lg-2 opciones-admin">
                    <h3 className="text-center mt-2" style={{color: '#ffff'}}>ADMIN</h3>
                   <ul className="list-group">
                       <li className="list-group-item">CREATE/UPDATE</li>
                   </ul>
                </div>


                <div className="col-12 col-xs-8 col-md-9 col-lg-10 admin-edit">
                    <AdminForm
                        products={products}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;