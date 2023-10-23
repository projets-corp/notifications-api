// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';

const MenuList = ({menuItems, open}) => {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup open={open} key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
