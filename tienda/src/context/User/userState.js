import { useReducer } from "react";
import userReducer from "./userReduces";
import userContext from "./userContext";

const UserState = (props) => {

   //Data Inicial
   const dataInicial = {
      session: false
   }
   
   //Reducer
   const [state, dispatch] = useReducer(userReducer, dataInicial);

   //Actions
   const readSessionUserAdmin = () => {
      if(localStorage.getItem('admin-token')){
         dispatch({type: 'USER', payload: true})
      }else dispatch({type: 'USER', payload: false})
   }
   

   const loginAdmin = async(admin) => {
      try{
         const config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
         }
         const res = await fetch('http://localhost:8080/api/login-admin', config);
         const data = await res.json();

         if(data.err)  dispatch({type: 'USER', payload: false});
         else  dispatch({type: 'USER', payload: true});
         
         console.log(data)
      }catch(err){console.error('ALGO SALIÓ MAL')}
   }

   return (
      <userContext.Provider value={{
         session: state.session,
         readSessionUserAdmin, loginAdmin
      }}>
         {props.children}
      </userContext.Provider>
   )
}

export default UserState;