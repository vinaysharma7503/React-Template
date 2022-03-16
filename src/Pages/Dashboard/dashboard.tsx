import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Widgets/Header/header'
import Sidemenu from '../../Widgets/Sidebar/sidebar'

interface Props {

}

const index = (props: Props) => {

    // const toggalWidth = React.useRef<any>('toggal-width');

    // const toggleSidemenu = () => {
    //     toggalWidth.current.classList.toggle('toggal-sidemenu')
    // }


    return (
        <div className='flex h-screen'>
            {/* <div className='w-7 h-7 bg-green-600 absolute rounded-circle text-white text-center' style={{ right: '-5%', top: '2%' }} onClick={toggleSidemenu}> X </div> */}
            <Sidemenu />
            <div className='flex-auto bg-red-100 relative'>
                <Header />
                <div className='overflow-y-scroll h-screen'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default index
