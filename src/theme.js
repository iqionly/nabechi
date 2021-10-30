import { createTheme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

export const theme = createTheme({
    palette: {
        background: {
            default: grey[200],
            paper: grey[200],
        }
    }
});

export const drawerWidth = 240;