import axios from "axios";


export const getData = (params) => {
    return axios({
        url: 'http://192.168.87.121/ow/list',
        method: 'POST',
        params
    })
};
