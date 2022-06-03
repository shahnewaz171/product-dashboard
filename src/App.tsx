import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/useGlobalContext';
import GetRoutes from './routes/GetRoutes';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/shared/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/shared/CustomStyles/CustomStyles';
import './App.css';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Navbar />
          <GetRoutes />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;
