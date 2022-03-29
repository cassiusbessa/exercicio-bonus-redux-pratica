export const ADD_CLIENTE = 'ADD_CLIENTE';

export const addCliente = (cliente) => ({
    type: ADD_CLIENTE,
    payLoad: cliente,
})