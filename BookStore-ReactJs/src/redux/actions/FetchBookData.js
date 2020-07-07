import { FETCH_BOOKDATA, ADD_BOOK, UPDATE_BOOK } from './../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'

export const actFetchAllBookData = (book) =>{
    return {
        type: FETCH_BOOKDATA,
        book
    }
}

export const actFetchAllBookDataRequest = () =>{
    return dispatch =>{
        return CallApi('allbook','GET',null).then(response =>{
            dispatch(actFetchAllBookData(response.data))
        })
    }
}

export const actAddBookRequest = book =>{
    return dispatch => {
        return CallApi('allbook', 'POST', book).then(response =>{
            dispatch(actAddBook(response.data))
        })
    }
}

export const actAddBook = (book) =>{
    return {
        type: ADD_BOOK,
        book
    }
}

export const actUpdateBookRequest = (book) =>{
    return dispatch =>{
        return CallApi('allbook','PATCH', book).then(response => {
            if(response.message === 1){
                dispatch(actUpdateBook(response.data))
            }
        })
    }
}

export const actUpdateBook = (book) =>{
    return {
        type: UPDATE_BOOK,
        book
    }
}