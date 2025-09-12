import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import type { Skill } from "../types/skill";
import skills from "../data/skills.json";

import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";

const defaultIcons: Record<string, React.ReactNode> = {
  Language: <CodeIcon />,
  frontend: <WebIcon />,
  backend: <ComputerIcon />,
  tools: <BuildIcon />,
  devops: <BuildIcon />,
  database: <StorageIcon />,
};

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [error, setError] = React.useState(false);

  if (skill.avatar && !error) {
    return (
      <Box
        component="img"
        src={`/thumbnails/${skill.avatar}.png`}
        alt={skill.label}
        sx={{ width: 24, height: 24 }}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <>{defaultIcons[skill.types[0]] ?? <CodeIcon sx={{ fontSize: 24 }} />}</>
  );
};

const Skills = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  const isRtl = data.direction === "rtl";

  const skillsArray = skills.skills;

  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "5rem 3rem",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            {data.skills.title}
          </Typography>
          <Typography variant="body1" color={theme.palette.secondary.main}>
            {data.skills.description}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: { xs: "0 0 100%", md: "0 0 40%" },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              background: theme.palette.secondary.main,
              justifyContent: isRtl ? "flex-end" : "flex-start",
              width: "100%",
              minWidth: "80%",
              minHeight: "60%",
              height: "auto",
            }}
          >
            {skillsArray.map((skill) => (
              <Box
                key={skill.label}
                sx={{
                  p: 1,
                  borderRadius: 1,
                  background: theme.custom.background,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 1,
                  minWidth: 120,
                  mb: 1,
                  boxShadow: theme.custom.shadow,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.custom.shadow + "60px",
                  },
                }}
              >
                <SkillIcon skill={skill} />
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                >
                  {skill.label}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
