export default function componentStyleOverrides(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                },
            },
            variants: [
                {
                    props: { variant: 'light', color: 'primary' },
                    style: {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.dark,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                        },
                    },
                },
                {
                    props: { variant: 'light', color: 'default' },
                    style: {
                        backgroundColor: theme.palette.grey[300],
                        color: theme.palette.grey[700],
                        '&:hover': {
                            backgroundColor: theme.palette.grey[400],
                        },
                    },
                },
            ],
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[1],
                    padding: 8,
                    background: theme.palette.background.paper,
                    [theme.breakpoints.up('md')]: { borderRadius: 8 },
                },
            },
        },

        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[700],
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.primary.main,
                        },
                    },
                    '&.Mui-selected': {
                        color: theme.palette.primary.light,
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            color: theme.palette.primary.light,
                            backgroundColor: theme.palette.primary.main,
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.primary.light,
                        },
                    },
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    '&>.MuiAvatar-root': {
                        fontSize: '1em',
                        borderColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
                        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.background.default,
                        color: theme.palette.mode === 'light' ? theme.palette.grey[700] : '#fff',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: { backgroundImage: 'none' },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: { backgroundImage: 'none' },
            },
        },
    };
}
