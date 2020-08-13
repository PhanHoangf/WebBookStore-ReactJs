import { FETCH_BOOKDATA, ADD_BOOK, UPDATE_BOOK, GET_BOOK_BY_CATEGORY } from './../actiontypes/ActionTypes'

const initialState = []

export default function AllBook(state = initialState, action){
    var category = action.category
    console.log(state)
    switch(action.type){
        case FETCH_BOOKDATA:
            state = action.book
            localStorage.setItem('allbook',JSON.stringify(state))
            return [...state]
        case ADD_BOOK:
            state.push(action.book)
            return[...state]
        case UPDATE_BOOK:
            state = action.book
            return [...state]
        case GET_BOOK_BY_CATEGORY:
            return findBookByCategory(JSON.parse(localStorage.getItem('allbook')), category)
        default:
            return [...state]
    }
}

function findBookByCategory(allbook, category){
    let result = [];
    if(allbook.length > 0){
        for(let i=0; i<allbook.length; i++){
            if(allbook[i].categoryName === category){
                result.push(allbook[i]);
            }
        }
    }
    return result;
}