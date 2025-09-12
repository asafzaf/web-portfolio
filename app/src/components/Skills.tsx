import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Popover,
  Stack,
  Button,
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
    event: React.MouseEvent<HTMLElement>,
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
                gap: 1,
                '& .MuiToggleButton-root': {
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                boxShadow: 1,
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                transition: 'background 0.2s, color 0.2s',
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  boxShadow: 3,
                },
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                },
              }}
              >
              {Object.entries(skills.filters).map(([category, tags]) => (
                <ToggleButton
                key={category}
                value={category}
                aria-label={category}
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
              p: 3,
              display: "flex",
              borderRadius: 4,
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
            {filteredSkills.map((skill) => (
              <SkillItem key={skill.label} skill={skill} />
            ))}
          </Paper>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
