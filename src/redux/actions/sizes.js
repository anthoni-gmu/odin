import axios from 'axios';
import {
    GET_SIZE_OK,
    GET_SIZE_FAIL
} from './types';


export const get_sizes = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/sizes`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SIZE_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SIZE_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SIZE_FAIL
        });
    }
}