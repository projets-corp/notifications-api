import thymeleaf from '@assets/images/thymeleaf.png';
import AnimateButton from '@components/extended/AnimateButton';
import { Avatar, Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconPlus } from '@tabler/icons';
import * as React from 'react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread2', 356, 16.0, 49, 3.9),
    createData('Gingerbread3', 356, 16.0, 49, 3.9),
    createData('Gingerbread4', 356, 16.0, 49, 3.9),
    createData('Gingerbread5', 356, 16.0, 49, 3.9),
    createData('Gingerbread6', 356, 16.0, 49, 3.9),
    createData('Gingerbread7', 356, 16.0, 49, 3.9),
    createData('Gingerbread8', 356, 16.0, 49, 3.9),
];

export default function Templates() {
    return (
        <>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <AnimateButton>
                    <Button
                        startIcon={<IconPlus />}
                        color="primary"
                        variant="contained"
                    >
                        New template
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
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">
                                            <Avatar src={thymeleaf} />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
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
