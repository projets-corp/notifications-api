import react from '@assets/techno/react.svg';
import spring from '@assets/techno/spring.svg';
import Card from '@components/Card';
import AnimateButton from '@components/extended/AnimateButton';
import { Avatar, AvatarGroup, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { IconDeviceMobileMessage, IconMail, IconPlus } from '@tabler/icons';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import UserDefaultAvatar from '../../../components/svg/UserDefaultAvatar';

const projects = [
    { label: 'Daily Meeting', techno: react },
    { label: 'Procurement planning', techno: spring },
    { label: 'Daily Meeting', techno: react },
    { label: 'DF Portal', techno: spring },
    { label: 'Caution', techno: react },
];


const Projects = () => {
    const navigateTo = useNavigate();
    return (
        <>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    <FormattedMessage id="landing.projects.myProjects" />
                </Typography>
                <AnimateButton>
                    <Button
                        onClick={() => navigateTo('new-project')}
                        startIcon={<IconPlus />}
                        color="primary"
                        variant="contained"
                    >
                        New Project
                    </Button>
                </AnimateButton>
            </Box>
            <Grid
                spacing={3}
                container
            >
                {projects.map((project) => (
                    <Grid
                        key={project.label}
                        item
                        sm={4}
                    >
                        <Card
                            navigateTo={() => navigateTo('/project/dashboard')}
                            actions={
                                <Box display={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <IconButton aria-label="add to favorites">
                                            <IconDeviceMobileMessage />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <IconMail />
                                        </IconButton>
                                    </Box>
                                    <AvatarGroup
                                        sx={{
                                            '&>.MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                            },
                                        }}
                                        max={4}
                                    >
                                        {Array.from({ length: Math.floor(Math.random() * 8) + 1 }).map((_, i) => {
                                            return (
                                                <Avatar
                                                    key={i}
                                                    alt="Remy Sharp"
                                                    src="test"
                                                >
                                                    <UserDefaultAvatar variant={i % 3} />
                                                </Avatar>
                                            );
                                        })}
                                    </AvatarGroup>
                                </Box>
                            }
                            title={<Typography variant="subtitle1">{project.label}</Typography>}
                            icon={project.techno}
                        >
                            <Typography variant="subtitle1">Special title treatment</Typography>
                            <Typography variant="subtitle2">With supporting text below as a natural lead-in to additional content.</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Projects;
