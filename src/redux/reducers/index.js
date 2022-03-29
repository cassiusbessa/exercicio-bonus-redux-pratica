import { ADD_CLIENTE } from "../actions";

const INITIAL_STATE = {
    clientes: [
        {
            cadastroNome: '', cadastroEmail: '', cadastroIdade: '', id:'',

        }
    ],
};

const clientesReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case ADD_CLIENTE:
       return { ...state, clientes: [...state.clientes, action.payLoad] };
    default:
    return state;
 }
}

export default clientesReducer;
