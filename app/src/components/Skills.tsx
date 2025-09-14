import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import skills from "../data/skills.json";

import SkillItem from "./skills/SkillItem";
import type { FilterCategory } from "../types/skill";

const Skills = () => {
  const theme = useTheme();
  const { data } = useLanguage();
  const isRtl = data.direction === "rtl";

  const [filters, setFilters] = useState<string[]>([]);

  const skillsArray = skills.skills;

  const [filteredSkills, setFilteredSkills] = useState(skillsArray);

  const handleFormat = (
    _event: React.MouseEvent<HTMLElement>,
    newFilters: string[]
  ) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const updateSkills = () => {
      if (filters.length === 0) {
        setFilteredSkills(skillsArray);
      } else {
        const selectedTags = filters.flatMap(
          (category) => skills.filters[category as FilterCategory] || []
        );
        const newFilteredSkills = skillsArray.filter((skill) =>
          skill.types.some((type) => selectedTags.includes(type))
        );
        setFilteredSkills(newFilteredSkills);
      }
    };
    updateSkills();
  }, [filters]);

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
            {data.skills.title}
          </Typography>
          <Typography variant="h5" color={theme.palette.secondary.main}>
            {data.skills.description}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: { xs: "0 0 100%", md: "0 0 40%" },
          }}
        >
          <Box flexDirection={isRtl ? "row-reverse" : "row"} mb={2}>
            <Stack direction="row" flexWrap="wrap" justifyContent="center">
                <ToggleButtonGroup
                color="primary"
                value={filters}
                onChange={handleFormat}
                aria-label="text formatting"
                exclusive={false}
                sx={{
                  gap: { xs: 0.5, md: 1 },
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: { xs: "100%", md: "auto" },
                  "& .MuiToggleButton-root": {
                  borderRadius: 2,
                  px: { xs: 1.5, md: 3 },
                  py: { xs: 0.5, md: 1 },
                  fontWeight: 600,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  border: "none",
                  boxShadow: 1,
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.secondary,
                  transition: "background 0.2s, color 0.2s",
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    boxShadow: 3,
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                  margin: { xs: "2px 0", md: "0" },
                  width: { xs: "100%", sm: "auto" },
                  },
                }}
                >
                {Object.entries(skills.filters).map(([category, _tags]) => (
                  <ToggleButton
                  key={category}
                  value={category}
                  aria-label={category}
                  sx={{ boxShadow: theme.custom.shadow }}
                  >
                  {category}
                  </ToggleButton>
                ))}
                </ToggleButtonGroup>
            </Stack>
          </Box>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 5 },
              display: "flex",
              flexDirection: "row",
              borderRadius: 4,
              flexWrap: "wrap",
              gap: 2,
              background: theme.palette.secondary.main,
              boxShadow: theme.custom.shadow,
              width: "100%",
              alignItems: "flex-start",
              justifyItems: "flex-start",
              minHeight: "300px",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              {filteredSkills.map((skill) => (
                <SkillItem key={skill.label} skill={skill} />
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
