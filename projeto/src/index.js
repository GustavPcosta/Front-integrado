import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom'
import MainRouts from './routes';
import GlobalContextProvider from './Contexts/GlobalContextsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
    <BrowserRouter>
     <MainRouts/>
    </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);


