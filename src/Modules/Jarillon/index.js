import React from 'react';
import Todo from "./Todo"
import { useContext } from '../../Components/Context/Context';

const Jarillon = () => {
    const { data, isLoading } = useContext();
    console.log("data",data)
    return (
        <>
            {data.map((item, i) => {
                console.log("Iten", item)
                return <Todo todo={item.title} key={i} isLoading={isLoading} />
            })}
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