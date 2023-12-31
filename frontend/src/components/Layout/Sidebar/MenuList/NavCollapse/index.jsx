import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router';
import NavItem from '../NavItem';

const NavCollapse = ({ menu, level, open }) => {
    const [openCollapse, setOpenCollapse] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = () => {
        setOpenCollapse(!openCollapse);
        setSelected(!selected ? menu.id : null);
    };

    const { pathname } = useLocation();
    const checkOpenForParent = (child, id) => {
        child.forEach((item) => {
            if (item.url === pathname) {
                setOpenCollapse(true);
                setSelected(id);
            }
        });
    };

    // menu collapse for sub-levels
    useEffect(() => {
        setOpenCollapse(false);
        setSelected(null);
        if (menu.children) {
            menu.children.forEach((item) => {
                if (item.children?.length) {
                    checkOpenForParent(item.children, menu.id);
                }
                if (item.url === pathname) {
                    setSelected(menu.id);
                    setOpenCollapse(true);
                }
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, menu.children]);

    // menu collapse & item
    const menus = menu.children?.map((item) => {
        switch (item.type) {
            case 'collapse':
                return (
                    <NavCollapse
                        key={item.id}
                        menu={item}
                        level={level + 1}
                    />
                );
            case 'item':
                return (
                    <NavItem
                        key={item.id}
                        item={item}
                        level={level + 1}
                    />
                );
            default:
                return (
                    <Typography
                        key={item.id}
                        variant="h6"
                        color="error"
                        align="center"
                    >
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const Icon = menu.icon;
    const menuIcon = menu.icon ? (
        <Icon
            strokeWidth={1.5}
            size="1.5rem"
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
        />
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: '8 !important',
                height: '8 !important',
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: `8px`,
                    overflow: 'hidden',
                    mb: 0.5,
                    alignItems: 'flex-start',
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    pl: `${level * 12}px`,
                }}
                selected={selected === menu.id}
                onClick={handleClick}
            >
                <ListItemIcon
                    sx={{
                        my: 'auto',
                        minWidth: !menu?.icon ? 24 : 36,
                    }}
                >
                    {menuIcon}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            variant={'body2'}
                            sx={{ my: 'auto' }}
                        >
                            <FormattedMessage id={menu.title} />
                        </Typography>
                    }
                    secondary={
                        menu.caption && (
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                            >
                                {menu.caption}
                            </Typography>
                        )
                    }
                />
                {openCollapse ? (
                    <IconChevronUp
                        stroke={1.5}
                        size="1rem"
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}
                    />
                ) : (
                    <IconChevronDown
                        stroke={1.5}
                        size="1rem"
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}
                    />
                )}
            </ListItemButton>
            <Collapse
                in={open && openCollapse}
                timeout="auto"
                unmountOnExit
            >
                <List
                    component="div"
                    disablePadding
                    sx={{
                        position: 'relative',
                    }}
                >
                    {menus}
                </List>
            </Collapse>
        </>
    );
};

NavCollapse.propTypes = {
    menu: PropTypes.object,
    level: PropTypes.number,
};

export default NavCollapse;
