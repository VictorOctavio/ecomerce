import React from "react";
import './admin.css';

import { Link } from 'react-router-dom';

const Admin = () => {

    return (
        <div className="row opciones-container">
            <div className="opciones-admin">
                <h3 className="opcionesAdminTitle">ADMIN</h3>
                <ul className="list-group">
                    <Link to="/admin" className="opciones-item list-group-item">CREATE/UPDATE</Link>
                </ul>
            </div>
        </div>
    )
}

export default Admin;