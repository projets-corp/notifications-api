import { ClickAwayListener, IconButton, Paper, Popper } from '@mui/material';

import React from 'react';
import ProfileMenu from './ProfileMenu';
import UserAvatar from './UserAvatar';

export default function ProfileSection() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <IconButton
                aria-describedby={id}
                type="button"
                onClick={handleClick}
                sx={{ p: 0 }}
            >
                <UserAvatar />
            </IconButton>
            <Popper
                placement={'bottom-end'}
                id={id}
                open={open}
                anchorEl={anchorEl}
                role={undefined}
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [20, 10],
                            },
                        },
                    ],
                }}
            >
                <Paper
                    sx={{ overflow: 'hidden' }}
                    elevation={2}
                >
                    <ClickAwayListener onClickAway={handleClick}>
                        <ProfileMenu />
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </div>
    );
}
