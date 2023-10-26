import { drawerWidth } from '@config';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children, menuItems }) {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const [drawerPinned, setDrawerPinned] = React.useState(false);
    const drawerPinneToggle = () => {
        setDrawerPinned((prev) => !prev);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar
                menuItems={menuItems}
                drawerOpen={drawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                drawerPinned={drawerPinned}
                drawerPinneToggle={drawerPinneToggle}
            />
            <Box
                component="main"
                sx={{
                    height: '100vh',
                    overflowY: scroll,
                    flex: 1,
                    [theme.breakpoints.up('md')]: {
                        py: 2,
                        px: 3,
                        width: `calc(100% - ${drawerPinned ? drawerWidth : 80}px)`,
                    },
                }}
            >
                <AppBar
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        transition: open ? theme.transitions.create('width') : 'none',
                    }}
                    position="sticky"
                >
                    <Toolbar>
                        <Header handleDrawerOpen={handleDrawerOpen} />
                    </Toolbar>
                </AppBar>
                <Box sx={{ py: 3 }}>{children}</Box>
            </Box>
        </Box>
    );
}
