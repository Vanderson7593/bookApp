import {
    ADD_BOOK,
    DELETE_BOOK,
    TOGGLE_FAV_BOOK,
    SET_CURRENT_PAGE_BOOK
} from './actionTypes.js'

let nextBookId = 0

export const addBook = book => ({
    type: ADD_BOOK,
    payload: {
        id: ++nextBookId,
        book
    }
})

export const toggleFavBook = id => ({
    type: TOGGLE_FAV_BOOK,
    payload: { id }
})

export const deleteBook = id => ({
    type: DELETE_BOOK,
    payload: { id }
})

export const setCurrentPageBook = (id, page) => ({
    type: SET_CURRENT_PAGE_BOOK,
    payload: { id, page }
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});
