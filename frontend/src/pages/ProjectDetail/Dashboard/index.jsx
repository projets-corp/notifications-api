import ChartCard from '@components/ChartCard';
import { useTheme } from '@emotion/react';
import { Box, Grid, Typography } from '@mui/material';
import { IconArchive, IconMail, IconNotification } from '@tabler/icons';
import * as React from 'react';
import Chart from 'react-apexcharts';
import History from './History';
import getDemoChartConfig from './data';

const getRandomValues = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 40));

export default function Dashboard() {
    const theme = useTheme();
    const color = theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.main;
    return (
        <Box sx={{ py: 3 }}>
            <Typography variant="h5">Daily Meeting</Typography>
            <Box sx={{ pt: 2 }}>
                <Grid
                    spacing={3}
                    container
                >
                    <Grid
                        item
                        sm={4}
                    >
                        <ChartCard
                            title={<Typography>Notification</Typography>}
                            icon={<IconMail />}
                        >
                            <Box sx={{mx:1, }}>
                                <Chart
                                    {...getDemoChartConfig(
                                        theme,
                                        theme.palette.mode === 'dark' ? 'light' : 'dark',
                                        [{ data: getRandomValues() }, { data: getRandomValues() }],
                                        'bar'
                                    )}
                                />
                            </Box>
                        </ChartCard>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                    >
                        <ChartCard
                            title={<Typography>Notification</Typography>}
                            icon={<IconNotification />}
                        >
                            <Chart
                                {...getDemoChartConfig(
                                    theme,
                                    theme.palette.mode === 'dark' ? 'light' : 'dark',
                                    [{ data: getRandomValues() }],
                                    'area'
                                )}
                            />
                        </ChartCard>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                    >
                        <ChartCard
                            title={<Typography color={color}>Notification</Typography>}
                            icon={<IconArchive color={color} />}
                            sx={{ bgcolor: theme.palette.mode === 'light' ? 'primary.main' : 'primary.light' }}
                        >
                            <Chart {...getDemoChartConfig(theme, theme.palette.mode, [{ data: getRandomValues() }], 'area')} />
                        </ChartCard>
                    </Grid>
                    <Grid
                        item
                        sm={6}
                    >
                        <History />
                    </Grid>
                    <Grid
                        item
                        sm={6}
                    >
                        <History />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
