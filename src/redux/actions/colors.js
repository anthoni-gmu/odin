import axios from 'axios';
import {
    GET_COLOR_OK,
    GET_COLOR_FAIL,
} from './types';


export const get_colors = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/colors`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_COLOR_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_COLOR_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_COLOR_FAIL
        });
    }
}