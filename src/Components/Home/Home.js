import React, { useState } from 'react';
import ListModules from "../RenderModules/ListModules"
import { Link } from "react-router-dom";
// import Sidebar from '../Sidebar/Sidebar';
import CardModules from '../RenderModules/CardModules';
// import modules from '../../Modules';
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {

  return (
    <>
      <div className="absolute bg-gray-200 w-full h-full">
        <Sidebar />
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">Proyectos</h4>
            <CardModules />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home