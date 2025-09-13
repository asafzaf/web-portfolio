import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAsset } from "../../hooks/useAsset";

import type { Skill } from "../../types/skill";

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
  const { src, onError } = useAsset(
    `/thumbnails/${skill.avatar}.png`,
    `/thumbnails/fallback.png`
  );

  if (skill.avatar) {
    return (
      <Box
        component="img"
        src={src}
        alt={skill.label}
        sx={{ width: 24, height: 24 }}
        onError={onError}
        loading="lazy"
      />
    );
  }

  return (
    <>{defaultIcons[skill.types[0]] ?? <CodeIcon sx={{ fontSize: 24 }} />}</>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  const theme = useTheme();

  return (
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
      <Typography variant="body2" color={theme.palette.text.secondary}>
        {skill.label}
      </Typography>
    </Box>
  );
};

export default SkillItem;
