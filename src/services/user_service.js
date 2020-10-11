import axios from 'axios';

import { URL } from '../env/env';


export const postUser = async (user) => {
    
    const url = URL + '/user';
    
    try {
        const resp = await axios.post(url, user);
        return resp.data;

    } catch (err) {
        return !err.response ? { ok: false, error_code: 106 }: err.response.data;
    }

}

export const updateUser = async (user, id) => {
    
    const url = URL + '/user?id=' + id;
    
    try {
        const resp = await axios.put(url, user);
        return resp.data;

    } catch (err) {
        return !err.response ? { ok: false, error_code: 106 }: err.response.data;
    }

}

export const login = async (user) => {
    
    const url = URL + '/user/login';
    
    try {
        const resp = await axios.post(url, user);
        return resp.data;

    } catch (err) {
        return !err.response ? { ok: false, error_code: 106 }: err.response.data;
    }

}
