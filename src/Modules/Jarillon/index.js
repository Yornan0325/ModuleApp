import React from 'react';
import Todo from "./Todo"
import { useContext } from '../../Context/Context';

const Jarillon = () => {
    const { data, isLoading } = useContext();
console.log(data)
    return (
        <>
            <div className="w-full max-w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
                </div>
                {data.map((item, i) => (
                    <Todo todo={item} key={i} isLoading={isLoading} />

                ))}
            </div>
        </>
    )
};

const JarillonModule = {
    routeModule: {
        path: '/jarillon',
        id: 1,
        name: 'Jarillon Rio Cauca',
        component: Jarillon,

    },

}
export default JarillonModule