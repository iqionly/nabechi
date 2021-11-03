import { styled } from '@mui/material/styles';
import { drawerWidth } from '../theme';
import BarFiller from './BarFiller';

import Home from '../pages/Home';

const CustomMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
        background: (theme) => theme.palette.mode !== 'dark' ? theme.palette.grey(500) : null,
    }),
);

export default function Main(props) {

    return (
        <CustomMain open={props.open}>
            <BarFiller />
            <Home />
        </CustomMain>
    );
}