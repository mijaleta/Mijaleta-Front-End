import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
 
import ThemeContextProvider from './contexts/theme-context';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app';
 
const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ThemeContextProvider>
);

reportWebVitals();
