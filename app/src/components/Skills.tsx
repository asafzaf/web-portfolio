import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "5rem 3rem",
      }}
    >
      <Box sx={{ maxWidth: 800, textAlign: "center" }}>
        <Typography variant="h2" color={theme.palette.secondary.main} gutterBottom >
            {data.skills.title}
            </Typography>
        <Typography variant="body1" color={theme.palette.secondary.main}>
          {data.skills.description}
        </Typography>
      </Box>
    </section>
  );
};

export default Skills;
