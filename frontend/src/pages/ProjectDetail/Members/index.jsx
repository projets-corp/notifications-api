import AnimateButton from '@components/extended/AnimateButton';
import { useTheme } from '@emotion/react';
import { Avatar, Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconPlus, IconUser } from '@tabler/icons';
import * as React from 'react';
import { FormattedDate } from 'react-intl';

function createData(id, name, role, expiration, createdOn, lastActivity) {
    return { id, name, role, expiration, createdOn, lastActivity };
}

const rows = [
    createData(1, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(2, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(3, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(4, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(5, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(6, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(7, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
    createData(8, 'RHABI Khalifa', 'Maintainer', new Date(), new Date(), new Date()),
];

export default function Templates() {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <AnimateButton>
                    <Button
                        startIcon={<IconPlus />}
                        color="primary"
                        variant="contained"
                    >
                        New member
                    </Button>
                </AnimateButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Paper>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: 0 }}></TableCell>
                                    <TableCell>Account</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Expiration</TableCell>
                                    <TableCell>Created On</TableCell>
                                    <TableCell>Last Activity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                                                <IconUser color={theme.palette.primary.main} />
                                            </Avatar>
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.role}</TableCell>
                                        <TableCell>
                                            <FormattedDate value={row.expiration} />
                                        </TableCell>
                                        <TableCell>
                                            <FormattedDate value={row.createdOn} />
                                        </TableCell>
                                        <TableCell>
                                            <FormattedDate value={row.lastActivity} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </>
    );
}
