import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

// Loading bar
import AppProgress from './components/AppProgress';

import AppBar from './components/AppBar';
import AppDrawer from './components/AppDrawer';
import AppMain from './components/AppMain';

export default function App() {

    // Basic Logic Drawer
    let [open, setOpen] = useState(false);

    function handleDrawer(event) {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <Box
            sx={{ display: 'flex' }}
        >
            <CssBaseline />
            {/** Start Page, Drawer, Appbar, Content in below */}
            <AppBar open={open} handle={handleDrawer}/>

            <AppDrawer open={open} handle={handleDrawer} />

            <AppMain open={open} />
        </Box>
    );
}