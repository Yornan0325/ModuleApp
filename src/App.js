import React from 'react';
import {
  Route,
  Routes,
 
} from "react-router-dom";
import './App.css';
import SignIn from './Access/SignIn/SignIn';
import NotFound from './Access/NotFound/NotFound';
import Home from './Components/Home/Home'
import modules from "./Modules";
import { Providers  } from './Context/Context';

function App() {

  return (
    <div className="App">
      <Providers>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {
            modules.map((module, index) => {
              const Components = module.routeModule.component;
              return <Route key={module.routeModule.id} path={`${module.routeModule.path}/${module.routeModule.id}`} element={<Components />} />
            })
          }
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes >
      </Providers>
    </div >
  );
}

export default App;
