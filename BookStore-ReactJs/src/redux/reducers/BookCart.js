import { ADD_TO_CART } from "redux/actiontypes/ActionTypes"


const initialState=[]

export default function BookCart( state = initialState, action ){
    var {book, quantity} = action;
    var index = -1; 
    switch(action.type){
        case ADD_TO_CART:
            index = findIndex(state, book)
            if(index !== -1){
                state[index].quantity += quantity
            }
            else {
                state.push({
                    book,
                    quantity
                })
            }
            return [...state]
        default:
            return [...state];
    }
}

const findIndex = (BookCart, book) =>{
    var index = -1;
    if(BookCart.length > 0){
        for(let i=0; i<BookCart.length; i++){
            if(BookCart[i].book.bookID == book.bookID){
                index = i;
                break;
            }
        }
    }
    return index;
}