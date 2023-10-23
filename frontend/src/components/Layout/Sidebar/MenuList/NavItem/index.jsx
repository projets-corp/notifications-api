import PropTypes from 'prop-types';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ item, level }) => {
  const location = useLocation();
  const Icon = item.icon;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.5rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: "8 !important",
        height: "8 !important"
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );
  return (
    <ListItemButton
      LinkComponent={Link}
      to={item.url}
      disabled={item.disabled}
      sx={{
        borderRadius: `8px`,
        overflow: 'hidden',
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        pl: `${level * 12}px`
      }}
      selected={item.url === location.pathname}
    >
      <ListItemIcon sx={{
        my: 'auto', minWidth: !item?.icon ? 24 : 36,
      }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography sx={{ whiteSpace: "nowrap" }} variant='body2' color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
