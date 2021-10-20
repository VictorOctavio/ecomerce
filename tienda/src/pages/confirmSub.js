import React, {useEffect, useState} from 'react'
import Config from '../config';

const ConfirSubPage = () => {
  
    const [message, setMessage] = useState('');

  useEffect( () => {

    const confirmSub = async() => {
        const token = window.location.pathname.split(`/`)[1];
        const config = {
            method: 'GET',
            headers: {'auth-token': token}
        }
        const res = await fetch(`${Config.URI}/confirm-sub`, config);
        const data = await res.json();

        setMessage(data.message);

        setTimeout(() => {
            window.location.replace(Config.URL);
        }, 3000);
    }

    confirmSub();

  }, [])

    return(
        <div style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)'
        }}>
            <h2 style={{color: 'white', fontWeight: '700', fontSize: '35px'}}>CONFIRMACION DE CUENTA</h2>
            <p  style={{color: 'tomato', fontWeight: '300',  fontSize: '22px'}}>{message}</p>
        </div>
   )

 }

export default ConfirSubPage