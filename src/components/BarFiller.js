import React from 'react';
import { styled } from '@mui/material/styles';

export default function BarFiller() {
    let El = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <React.Fragment>
            <El />
        </React.Fragment>
    );
}