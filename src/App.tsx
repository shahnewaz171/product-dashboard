import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/useGlobalContext';
import GetRoutes from './routes/GetRoutes';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/shared/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <GetRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}


export default App;
