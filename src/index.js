import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from '@mui/material/styles';

// Theme and Styles
import './index.css';
import { theme } from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);