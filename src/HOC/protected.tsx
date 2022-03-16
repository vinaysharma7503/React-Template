import React, { useEffect } from 'react'
import { useNavigate  } from "react-router-dom";
import {useSelector} from 'react-redux'
interface Props{
    element:any
}

const Protected =(props: Props) => {
    const {element} = props;
    const navigate = useNavigate();
    const {userInfo = {} } = useSelector((state:any)=> state?.LoginReducer);
    console.log('userInfo',userInfo);
        
    
    useEffect(() => {
        if(userInfo?.data) return;
        
        !(userInfo?.data?.token) && navigate('/');
    },[]);
    
 
    return (userInfo?.data?.token) ? element :<div/>

   
}

export default Protected
