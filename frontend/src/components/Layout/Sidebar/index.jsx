import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Chip, Drawer, Stack, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';
import MenuList from './MenuList';
import LogoSection from './LogoSection';
import { drawerWidth } from '@config';
import { IconPinned, IconPinnedOff } from '@tabler/icons';
import React from 'react';

const toggleMixin = (theme, drawerOpen) => ({
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!drawerOpen && {
    width: '80px',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  })
})

const VersionChip = ({ theme }) => (
  <Stack direction="row" justifyContent="center" sx={{ position: 'absolute', bottom: theme.spacing(1) }}>
    <Chip label={"1.0.0"} variant='outlined' color="primary" size="small" />
  </Stack>
)

const Sidebar = ({ menuItems, window, drawerOpen, handleDrawerOpen, handleDrawerClose, drawerPinned, drawerPinneToggle }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const container = window !== undefined ? () => window.document.body : undefined;
  return (
    <Drawer
      container={container}
      variant={matchUpMd ? 'permanent' : 'temporary'}
      anchor="left"
      elevation={1}
      open={drawerOpen}
      onClose={handleDrawerClose}
      onMouseEnter={!drawerPinned && handleDrawerOpen}
      onMouseLeave={!drawerPinned && handleDrawerClose}
      sx={{
        width: drawerPinned ? drawerWidth : 80,
        '& .MuiDrawer-paper': {
          boxShadow: theme.shadows[2],
          overflowX: 'hidden',
          width: drawerWidth,
          borderRight: 'none',
          ...toggleMixin(theme, drawerOpen)
        },
        ...(drawerPinned && toggleMixin(theme, drawerOpen))
      }}
      ModalProps={{ keepMounted: true }}
      color="inherit"
    >
      <Box >
        <Box sx={{
          width: drawerWidth,
          alignItems: "center",
          display: 'flex', justifyContent: "space-between", pl: 1, pr: 2, py: 2, boxSizing: 'border-box'
        }}>
          <LogoSection />
          {drawerPinned ? <IconPinned onClick={drawerPinneToggle} size={"1.2rem"} /> :
            <IconPinnedOff onClick={drawerPinneToggle} size={"1.2rem"} />}
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: 'calc(100vh - 80px)',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <MenuList menuItems={menuItems} open={drawerOpen} />
          <VersionChip theme={theme} />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList menuItems={menuItems} open={drawerOpen} />
          <VersionChip theme={theme} />
        </Box>
      </MobileView>

    </Drawer >
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default Sidebar;
