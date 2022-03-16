import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {

}

const index = (props: Props) => {
    const navigate = useNavigate()

    const onSubmit = () => {
        navigate('/reset-password', { state: {} });


        // sessionStorage.setItem("token","")
    }

    return (
        <div>
            <div className="grid place-content-center h-screen" onSubmit={onSubmit}>
                <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                        Enter Your OTP
                    </div>
                    <div className="mt-8">
                        <form action="#" autoComplete="off">
                            <div className="flex flex-row mb-6">
                                <div className="flex relative ">
                                    <input type="text" id="sign-in-email" className="border rounded w-8 p-2 mr-4 " autoComplete='off' placeholder="0" />
                                </div>
                                <div className="flex relative ">
                                    <input type="text" id="sign-in-email" className="border rounded w-8 p-2 mr-4 " autoComplete='off' placeholder="0" />
                                </div>
                                <div className="flex relative ">
                                    <input type="text" id="sign-in-email" className="border rounded w-8 p-2 mr-4 " autoComplete='off' placeholder="0" />
                                </div>
                                <div className="flex relative ">
                                    <input type="text" id="sign-in-email" className="border rounded w-8 p-2 mr-4 " autoComplete='off' placeholder="0" />
                                </div>
                                
                            </div>

                            <div className="flex w-full">
                                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    VERIFY
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default index
