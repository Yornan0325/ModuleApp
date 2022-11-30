import React, { useState } from 'react';
import { Link, } from "react-router-dom";
 

const ListModules = (props) => {
    const data = props.information
    const [isShow, setIsShow] = useState(true);

    return (
        <>
            <div className='mx auto'>
                <div className="max-w-2xl px-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800" >
                    <div className="flex items-center justify-between">

                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{props.id}</span>
                        {isShow ?
                            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"><span>Avtivo</span> </a>
                            : ""
                        }
                    </div>
                    <>
                        <Link to={`${data.path}/${data.id}`} key={data.id}>
                            <div className="mt-2" key={props.id}>
                                <div className="container ">
                                    <span className='text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:text-blue-600'>{data.name}</span>
                                </div>
                                {/* <p className="mt-2 text-gray-600 dark:text-gray-300">Dui urna vehicula , non etiam sociosqu.</p> */}
                            </div>
                        </Link>
                    </>
                    {/* <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div className="flex items-center">
                       
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">John Doe</a>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    )
}
export default ListModules