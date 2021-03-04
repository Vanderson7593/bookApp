import { VISIBILITY_FILTERS } from "../constants";



export const getBooksStore = store => store

export const getBooksList = store =>
    getBooksStore(store)

export const getBookById = (id, store) =>
    store.books.filter((item) => {
        if (item.id == id) {
            return item
        }
    })

