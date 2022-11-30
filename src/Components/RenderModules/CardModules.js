import React from 'react';
import modules from "../../Modules";
import ListModules from './ListModules'

const CardModules = () => {
    return (
        <>
            <div className="container m-auto ">
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-4'>
                    {
                        modules.map((module) => (
                            <ListModules information={module.routeModule} key={module.routeModule.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default CardModules