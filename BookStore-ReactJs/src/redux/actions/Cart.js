import { ADD_TO_CART,UPDATE_QUANTITY } from './../actiontypes/ActionTypes'

export const actAddToCart = (book, quantity) =>{
    return {
        type:ADD_TO_CART,
        book,
        quantity
    }
}

export const actUpdateQuantity = (quantity,book) =>{
    return{
        type:UPDATE_QUANTITY,
        quantity,
        book
    }
}