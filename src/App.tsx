import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { UserProvider } from './context/useGlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from './components/shared/Navbar/Navbar';
import NotFound from './components/shared/NotFound/NotFound';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/shared/CustomStyles/CustomStyles';
import { RouteTypes } from './types/model';
import RotatingLoader from './components/shared/Loader/RotatingLoader';
import './App.css';

const Home = React.lazy(() => import('./components/Home/Home'));


const App: React.FC = () => {

  const element: RouteTypes[] = [
    {
      path: "/",
      element: <Outlet />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ];

  const allRoutes = useRoutes(element);

  return (
    
      <React.Suspense fallback={<RotatingLoader />}>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <Navbar />
            {allRoutes}
          </UserProvider>
        </ThemeProvider>
      </React.Suspense>
    
  );
}


export default App;
