import React from 'react';

const PozoRadial = () => (
    <div>Module</div>
);

const PozoRadialModule = {
    routeModule: {
        path: '/pozoradial',
        name: 'Pozo Radial',
        id: 2,
        component: PozoRadial,
    },
    editProject: {
        isEditor: true,
        name:"Juan",
        email:"juan@gmail.com"
    }


};
export default PozoRadialModule