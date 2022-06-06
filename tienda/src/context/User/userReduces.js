import { USER } from '../types';

const userReducer = (state, action) => {
   
   const {type, payload} = action;
   
   switch (type) {
      case USER: return {...state, session: payload}
      default: return {state}
   }

}

export default userReducer;