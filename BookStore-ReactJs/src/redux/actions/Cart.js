import { ADD_TO_CART } from './../actiontypes/ActionTypes'

export const actAddToCart = (book, quantity) =>{
    return {
        type:ADD_TO_CART,
        book,
        quantity
    }
}