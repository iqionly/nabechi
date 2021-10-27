import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import CustomBar from './components/CustomBar';

export default function App() {
    return (
        <React.Fragment>                                
            <CssBaseline />
            {/** Start Page, Drawer, Appbar, Content in below */}
            <CustomBar />
        </React.Fragment>
    );
}