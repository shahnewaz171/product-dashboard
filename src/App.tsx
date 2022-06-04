import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { UserProvider } from './context/useGlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/shared/Navbar/Navbar';
import NotFound from './components/shared/NotFound/NotFound';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/shared/CustomStyles/CustomStyles';
import './App.css';

const Home = React.lazy(() => import('./components/Home/Home'));


const App: React.FC = () => {

  const element = [
    {
      path: "/",
      element: <Outlet />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ];

  const allRoutes = useRoutes(element);

  return (
    
      <React.Suspense fallback={<p>Loading ...</p>}>
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
