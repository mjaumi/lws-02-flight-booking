// reducer function for booking is here

import { ADD, DELETE } from './actionTypes';

//initial state
const initialState = [];

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.payload,
            ];
        case DELETE:
            return [

            ];
        default:
            return [...state];
    }
}

export default bookingReducer;