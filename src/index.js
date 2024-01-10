import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globalstyles from './Globalstyles';

import { ImageProvider } from './context/PhotoContext';
import MouseContextProvider from "./context/mouseContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <ImageProvider>
        <Globalstyles />
        <App />
      </ImageProvider>
    </MouseContextProvider>
  </React.StrictMode>
);