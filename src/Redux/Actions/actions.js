//different actions are defined which will be matched with type in reducer later
//same store for different reducers and there actions, after invoke from component, action is called, to receive the type

export const incrementAction = (payload) => ({ //rxaction
    type: "INCREMENT",
    payload
})

export const decrementAction = (payload) => ({
    type: "DECREMENT",
    payload
})

export const getProducts = (payload) => ({
    type: "GET_PRODUCTS",
    payload
})

export const addProductToCart = (payload) => ({
    type: "ADD_PRODUCT-TO-CART",
    payload
})

