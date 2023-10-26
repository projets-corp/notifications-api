import { Box, Button, Grid, InputAdornment, Paper, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { IconAlphabetLatin, IconId } from '@tabler/icons';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
    const navigateTo = useNavigate();
    return (
        <>
            <Typography
                variant="h6"
                sx={{ mb: 3 }}
            >
                Shipping address
            </Typography>
            <Paper
                elevation={2}
                sx={{ p: 3 }}
            >
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconId />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconAlphabetLatin />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                onClick={() => navigateTo('/')}
                                color="default"
                                variant="light"
                                sx={{ mr: 2 }}
                            >
                                {'Cancel'}
                            </Button>
                            <Button
                                onClick={() => navigateTo('/dashboard')}
                                color="primary"
                                variant="contained"
                            >
                                {'Create'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default NewProject;
