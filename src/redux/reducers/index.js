import { ADD_CLIENTE, REMOVE_CLIENTE } from "../actions";

const INITIAL_STATE = {
    clientes: [

    ],
};

const clientesReducer = (state = INITIAL_STATE, {type, payLoad}) => {
 switch(type) {
   case ADD_CLIENTE:
       return { ...state, clientes: [...state.clientes, { id:Math.floor(Math.random() *5379), payLoad } ] };
    case REMOVE_CLIENTE:
        return { ...state, clientes: state.clientes.filter(cliente => cliente.id !== payLoad) };
    default:
    return state;
 }
}

export default clientesReducer;
