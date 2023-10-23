import { Box, Button, Paper, Typography } from '@mui/material';
import { IconCopy } from '@tabler/icons';
import * as React from 'react';

export default function Authentification() {
    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Typography variant='h5' gutterBottom>Authentification</Typography>
                <Typography >Use this token to authenticate:</Typography>
            </Box>
            <Paper sx={{ mt: 3, p: 3 }}>
                <Typography variant='subtitle2' sx={{ overflowWrap: "break-word", fontStyle: "italic" }}>
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <Button startIcon={<IconCopy />} color='primary' variant='contained' >Copy</Button>
                </Box>
            </Paper>
        </>
    );
}