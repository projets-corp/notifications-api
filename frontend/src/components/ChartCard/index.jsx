import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export default function MainCard({ navigateTo, title, icon, actions, children, subheader, action, ...otherProps }) {
  return (
    <Card onClick={navigateTo} elevation={2} {...otherProps} >
      <CardHeader
        sx={{ p: 2 }}
        avatar={
          icon
        }
        action={
          action
        }
        title={title}
        subheader={subheader}
      />
      {children && <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        {children}
      </CardContent>}
      {actions && <CardActions disableSpacing>
        {actions}
      </CardActions>}
    </Card>
  );
}