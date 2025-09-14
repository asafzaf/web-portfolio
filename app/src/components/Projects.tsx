import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import projects from "../data/projects.json";
import { useAsset } from "../hooks/useAsset";

const Projects = () => {
  const theme = useTheme();
  const { data } = useLanguage();
  const isRtl = data.direction === "rtl";

  const [filters, setFilters] = useState<string[]>([]);

  const projectsArray = projects.projects;

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
            {projectsArray.map((project) => (
              <Grid item xs={12} sm={12} md={3} key={project.title}>
                <Card
                  sx={{
                    cursor: "pointer",
                    height: 300,
                    width: "calc(100% / 1 - 16px)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    object-fit="cover"
                    // image={useAsset(project.image)}
                  />
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2, // 👈 clamp to 2 lines
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.shortDesc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
