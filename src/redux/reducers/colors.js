import {
    GET_COLOR_OK,
    GET_COLOR_FAIL,
} from '../actions/types';

const initialState = {
    colors: null
};

export default function Categories(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_COLOR_OK:
            return {
                ...state,
                colors: payload.colors
            }
        case GET_COLOR_FAIL:
            return {
                ...state,
                colors: null
            }
        default:
            return state
    }
}