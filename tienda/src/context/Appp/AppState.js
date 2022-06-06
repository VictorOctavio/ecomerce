import { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";

const AppState = (props) => {
   
   //Data Inicial
   const dataInicial = {
      app: null
   }

   //Reducer
   const [state, dispatch] = useReducer(AppReducer, dataInicial);

   //Acciones

   return(
      <AppContext.Provider value={{
         app: state.app
      }}>
         {props.children}
      </AppContext.Provider>
   )
}

export default AppState;