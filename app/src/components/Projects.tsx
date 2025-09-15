import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import projects from "../data/projects.json";
import ProjectCard from "./projects/ProjectCard";
import ProjectModal from "./projects/ProjectModal";
import type { Project } from "../types/language";

const Projects = () => {
  const theme = useTheme();
  const { data } = useLanguage();
  const isRtl = data.direction === "rtl";

  //   const [filters, setFilters] = useState<string[]>([]);

  const projectsArray = projects.projects;

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const [selectedProject, setSelectedProject] = useState<
    Project | null
  >(null);

  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "5rem 3rem",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, md: 10 },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            {data.projects.title}
          </Typography>
          <Typography variant="h5" color={theme.palette.secondary.main}>
            {data.projects.description}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: { xs: "0 0 100%", md: "0 0 40%" },
            flexDirection: isRtl ? "row-reverse" : "row",
          }}
        >
          <Grid container spacing={2}>
            {projectsArray.map((project, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 4 }}
                key={project.title || "project-" + index}
                component="div"
              >
                <ProjectCard
                  name={project.title}
                  shortDesc={project.shortDesc}
                  image={project.image}
                  onClick={() => handleOpen(project)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
};

export default Projects;
