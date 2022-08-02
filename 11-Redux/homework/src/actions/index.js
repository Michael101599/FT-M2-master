export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
import { combineReducers } from "redux";

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = () => { 
  // Completa la funcion
  return{
    type: INCREMENT
  }
};

export const decrement = () => {
  // Completa la funcion
  return{
    type: DECREMENT
  }
};

let rootReducer = combineReducers(increment, decrement);
let store = createStore(rootReducer);

const counter = combineReducers({
  increment,
  decrement
});

export default counter;