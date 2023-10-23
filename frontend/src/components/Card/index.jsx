import { useTheme } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import * as React from 'react';

export default function MainCard({ navigateTo, title, icon, actions, children, subheader, action, ...otherProps }) {
  const theme = useTheme();
  return (
    <Card onClick={navigateTo} elevation={2} sx={{
      "&:hover": navigateTo && { cursor: "pointer", boxShadow: theme.shadows[4] }
    }} >
      <CardHeader
        avatar={
          icon && <Avatar sx={{ bgcolor: 'transparent', width: 32, height: 32 }} src={icon} aria-label="recipe" />
        }
        action={
          action
        }
        title={title}
        subheader={subheader}
        {...otherProps}
      />
      {children && <CardContent sx={{ py: 0 }}>
        {children}
      </CardContent>}
      {actions && <CardActions disableSpacing>
        {actions}
      </CardActions>}
    </Card>
  );
}