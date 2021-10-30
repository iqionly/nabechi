import React from 'react';
import { styled } from '@mui/material/styles';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

export default function Bar(props) {
    return (
        <AppBar position="fixed" open={props.open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handle}
                    edge="start"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {document.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}