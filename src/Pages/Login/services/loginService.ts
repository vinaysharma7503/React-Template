import { postReq } from "@RootService";

import APIEndPoints from './apiEndPoints';
const { LOGIN } = APIEndPoints

export const LoginData = async (data: any) => {
    try {
        return await postReq(LOGIN, data);
    } catch (error) {
        console.log('error', error);

    }

}