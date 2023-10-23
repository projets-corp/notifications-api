import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';
import { IconDots, } from '@tabler/icons';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item, open }) => {
  const theme = useTheme();

  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse open={open} key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem open={open} key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        sx={{ pb: 0 }}
        subheader={
          item.title && (open ? (
            <Typography variant="caption" sx={{ pb: 0 }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant="caption" display="block">
                  {item.caption}
                </Typography>
              )}
            </Typography>
          ) : <Box sx={{ textAlign: "center" }}><IconDots color={theme.palette.secondary.main} />
          </Box>)}
      >
        {items}
      </List>

    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
