import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: "#e6f5e8",
            main: "#007a27",
            dark: "#004c00",
        },
        secondary: {
            light: "#f6e5f1",
            main: "#ac2a90",
            dark: "#790062",
        },
        mode: "light",
    }
});

export const drawerWidth = 240;