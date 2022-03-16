import Dev from './dev';
import Prod from './prod';
import axios from 'axios';

const RootService: any = (env = 'dev') => env === 'dev' ? Dev : Prod;

// ENVIRONMENT CHANGE
const { BASEURL = '' } = RootService();

export const getReq = async (url: string) => {

    return axios.get(BASEURL + url)
        .catch((e: any) => console.log(e));
}

export const postReq = async (url: string, data: any) => {

    return axios.post(BASEURL + url, data)
        .catch((e: any) => console.log(e))
}
