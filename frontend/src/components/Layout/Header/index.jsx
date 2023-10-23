import PropTypes from 'prop-types';

import { drawerWidth } from '@config';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '../../../store/themeReducer';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';
import TranslationSection from './TranslationSection';

const Header = ({ handleDrawerOpen }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: `calc(${drawerWidth}px - ${theme.spacing(5)})`,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto',
                    },
                }}
            >
                <IconButton onClick={handleDrawerOpen}>
                    <IconMenu2 />
                </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={() => dispatch(switchMode())}>{mode === 'light' ? <IconMoon /> : <IconSun />}</IconButton>
            <TranslationSection />
            <NotificationSection />
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
