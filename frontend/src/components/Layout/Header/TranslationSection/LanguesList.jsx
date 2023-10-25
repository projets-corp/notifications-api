import { Card, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import List from '@mui/material/List';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocale } from '../../../../store/intlReducer';

const locales = [
    { label: 'English', locale: 'en' },
    { label: 'Français', locale: 'fr' },
];

const LanguesList = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const selectedLocale = useSelector((state) => state.intl.locale);
    const handleChangeLocal = (newLocale) => () => dispatch(changeLocale({ locale: newLocale }));
    return (
        <Card
            ref={ref}
            {...props}
        >
            <List >
                {locales.map(({ label, locale }) => (
                    <ListItem
                        key={locale}
                        alignItems="flex-start"
                        sx={{
                            px: 1,
                            py: 0,
                            mb: 0,
                        }}
                    >
                        <ListItemButton
                            onClick={handleChangeLocal(locale)}
                            selected={selectedLocale === locale}
                            sx={{
                                borderRadius: `8px`,
                            }}
                        >
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{ whiteSpace: 'nowrap' }}
                                        variant="body2"
                                        color="inherit"
                                    >
                                        {label}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
});

LanguesList.displayName = 'LanguesList';

export default LanguesList;
