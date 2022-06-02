import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Home from '../components/Home/Home';
import NotFound from '../components/shared/NotFound/NotFound';

const GetRoutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <Outlet />,
            children: [
                { index: true, element: <Home /> },
            ],
        },
        { path: "*", element: <NotFound /> },
    ]);

    return element;
}

export default GetRoutes;