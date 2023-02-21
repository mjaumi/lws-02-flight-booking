// all the action functions related to booking is declared here

import { ADD, DELETE } from './actionTypes'

export const addBooking = (data) => {
    return {
        type: ADD,
        payload: data,
    }
}

export const deleteBooking = (id) => {
    return {
        type: DELETE,
        payload: id,
    }
}