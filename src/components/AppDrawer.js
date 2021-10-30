import { useRef, useEffect } from 'react';
import { drawerWidth } from '../theme';
import BarFiller from './BarFiller';

import Drawer from '@mui/material/Drawer';
//import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function AppDrawer(props) {

    let ref = useRef();

    function handleDrawer(event) {
        if (event.key === 'Escape' && props.open) {
            props.handle();
        }
    } 

    useEffect(() => {

        // Close drawer when esc clicked and drawer open
        document.body.addEventListener('keydown', handleDrawer);
        return () => {
            document.body.removeEventListener('keydown', handleDrawer);
        };
    });

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                // Set Style for Paper
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            open={props.open}
            anchor='left'
            variant='persistent'
            ref={ref}
        >
            <BarFiller />
            <Divider />
            <List>
                <ListItem button key="Home">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="Genre">
                    <ListItemIcon>
                        <BookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Genre" />
                </ListItem>
                <ListItem button key="Setting">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                </ListItem>
                <ListItem button key="">
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Drawer>
    );
}