import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/useGlobalContext';
import GetRoutes from './routes/GetRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <UserProvider>
        <GetRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
