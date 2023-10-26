import { Box, Button, Grid, InputAdornment, Paper, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { IconId } from '@tabler/icons';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const EditProject = () => {
    const navigateTo = useNavigate();
    return (
        <>
            <Typography variant="h6" sx={{ mb: 3 }}>Edit Project</Typography>
            <Paper
                elevation={2}
                sx={{ p: 3 }}
            >
                <Grid
                    container
                    spacing={3}
                >
                    {Array.from({ length: 10 }).map((i) => (
                        <Grid
                            key={i}
                            item
                            xs={4}
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
                    ))}

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
                                {'Save'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default EditProject;
