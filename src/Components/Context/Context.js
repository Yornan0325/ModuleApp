import React, { useEffect, useState } from "react";
// import data from "../Data/data";
import constate from 'constate';

const useContextApp = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    

    return {
        data,
        isLoading
    };
}

export const [Providers, useContext] = constate(useContextApp);