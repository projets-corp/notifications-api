import { Card } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

const LanguesList = React.forwardRef((props, ref) => {
    return (
        <Card
            ref={ref}
            {...props}
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText primary="Frensh" />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText primary="English" />
                </ListItem>
            </List>
        </Card>
    );
});

LanguesList.displayName = 'LanguesList';

export default LanguesList;
