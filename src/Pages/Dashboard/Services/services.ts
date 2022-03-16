
import { getReq } from '../../../RootService';
import APIEndPoints from './apiEndPoints';
const {USER_LIST} = APIEndPoints

export const fetchUserList = async(cb:any) => {
    const result =  await getReq(USER_LIST);
    return cb(result);
}

