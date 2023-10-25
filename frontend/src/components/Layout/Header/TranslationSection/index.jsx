import { TranslateSharp } from '@mui/icons-material';
import { ClickAwayListener, IconButton, Paper } from '@mui/material';
import Popper from '@mui/material/Popper';
import * as React from 'react';
import LanguesList from './LanguesList';

export default function SimplePopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <>
            <IconButton
                aria-describedby={id}
                type="button"
                onClick={handleClick}
            >
                <TranslateSharp />
            </IconButton>
            <Popper
                placement={'bottom-end'}
                id={id}
                open={open}
                anchorEl={anchorEl}
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [20, 14],
                            },
                        },
                    ],
                }}
            >
                <Paper
                    elevation={2}
                    sx={{ overflow: 'hidden' }}
                >
                    <ClickAwayListener onClickAway={handleClick}>
                        <LanguesList />
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </>
    );
}
