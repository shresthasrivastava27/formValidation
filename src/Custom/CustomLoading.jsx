
import { CircularProgress, Typography } from '@mui/material';
import React from 'react';

const CustomLoading = () => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', margin: '-25px 0 0 -25px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.8em' }}>
                <CircularProgress />
                <Typography>Loading...</Typography>
            </div>
        </div>
    );
};

export default CustomLoading;
