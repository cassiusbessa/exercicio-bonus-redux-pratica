export const ADD_CLIENTE = 'ADD_CLIENTE';
export const REMOVE_CLIENTE = 'REMOVE_CLIENTE';
export const ORDER_CLIENTES = 'ORDER_CLIENTES';

export const addCliente = (cliente) => ({
    type: ADD_CLIENTE,
    payLoad: cliente, 
})

export const removeCliente = (id) => ({
    type: REMOVE_CLIENTE,
    payLoad: id,
})

