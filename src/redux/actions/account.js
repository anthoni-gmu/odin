import axios from 'axios';
import { setAlert } from './alert'

import {
    GET_ACCOUNT_OK,
    GET_ACCOUNT_FAIL,
    UPDATE_ACCOUNT_OK,
    UPDATE_ACCOUNT_FAIL
} from './types';

export const get_account = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/account/user`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_ACCOUNT_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_ACCOUNT_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: GET_ACCOUNT_FAIL
            });
        }
    }
}


export const update_account = (
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    zipcode,
    phone,
    country_region
) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        const body = JSON.stringify({
            address_line_1,
            address_line_2,
            city,
            state_province_region,
            zipcode,
            phone,
            country_region
        });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/account/update`, body, config);

            if (res.status === 200) {
                dispatch({
                    type: UPDATE_ACCOUNT_OK,
                    payload: res.data
                });
                dispatch(setAlert('Profile updated successfully', 'green'));
            } else {
                dispatch({
                    type: UPDATE_ACCOUNT_FAIL
                });
                dispatch(setAlert('Failed to update profile', 'red'));
            }
        } catch(err) {
            dispatch({
                type: UPDATE_ACCOUNT_FAIL
            });
            dispatch(setAlert('Failed to update profile', 'red'));
        }
    }
}