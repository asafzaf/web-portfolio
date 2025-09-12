import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import skills from "../data/skills.json";

import SkillItem from "./skills/SkillItem";

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
              <SkillItem key={skill.label} skill={skill} />
            ))}
          </Paper>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
