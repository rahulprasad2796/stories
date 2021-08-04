//reducer to get the products and to update the cart
//each reducer store different case which it will handle diffined in actions.js, after call from action it gets the 
//type with payload and changes the state, after changing the state, it is sent to store

const initialState = {
    products : [],
    cart: []
}

function productReducer(state = initialState, { type, payload }){
    switch (type) {

    case "GET_PRODUCTS":
        {return { ...state, products : payload }}
    case "ADD_PRODUCTS":
        {return {...state, products: [...state.products, payload]}}
    case "ADD_PRODUCT-TO-CART":
        {return {...state, cart: [...state.cart, payload] }}
    default:
        return state
    }
}

export default productReducer
