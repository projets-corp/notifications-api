import react from '@assets/techno/react.svg';
import spring from '@assets/techno/spring.svg';
import Card from '@components/Card';
import AnimateButton from '@components/extended/AnimateButton';
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { IconDeviceMobileMessage, IconMail, IconPlus } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const projects = [
    { label: "Daily Meeting", techno: react },
    { label: "Procurement planning", techno: spring },
    { label: "Daily Meeting", techno: react },
    { label: "DF Portal", techno: spring },
    { label: "Caution", techno: react },
]

const Projects = () => {
    const navigateTo = useNavigate();
    return (
        <Box sx={{ py: 3 }}>
            <Box sx={{ mb: 3, display: "flex", justifyContent: "flex-end" }}>
                <AnimateButton>
                    <Button
                        onClick={() => navigateTo("new-project")}
                        startIcon={<IconPlus />} color="primary" variant="contained"
                    >New Project</Button>
                </AnimateButton>
            </Box>
            <Grid spacing={3} container>
                {projects.map(project => (
                    <Grid key={project.label} item sm={4}>
                        <Card
                            navigateTo={() => navigateTo("/project/dashboard")}
                            actions={
                                <Box display={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                                    <IconButton aria-label="add to favorites">
                                        <IconDeviceMobileMessage />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <IconMail />
                                    </IconButton>
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
        </Box>
    );
};

export default Projects;
