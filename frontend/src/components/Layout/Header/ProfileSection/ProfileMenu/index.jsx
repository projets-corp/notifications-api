import { Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { IconLogout } from '@tabler/icons';
import React from 'react';

const ProfileMenu = React.forwardRef((props, ref) => (
    <Card
        ref={ref}
        {...props}
    >
        <List>
            <ListItem>
                <ListItemIcon>
                    <IconLogout />
                </ListItemIcon>
                <ListItemText primary="logout" />
            </ListItem>
        </List>
    </Card>
));
ProfileMenu.displayName = 'ProfileMenu';
export default ProfileMenu;
