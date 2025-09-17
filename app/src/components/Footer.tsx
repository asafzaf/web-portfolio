import { Box, Typography, useTheme } from "@mui/material";
import LinksStack from "./LinksStack";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer style={{ textAlign: "center", padding: "1rem 0" }}>
      <Box flexDirection="row" display="flex" justifyContent="center" mb={1}>
        <LinksStack customColor={theme.palette.secondary.main} />
      </Box>
      <Typography variant="body2" color="textSecondary">
        Built with ReactTS and MUI.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Asaf Zafrir. All rights reserved.
      </Typography>
    </footer>
  );
};
export default Footer;
