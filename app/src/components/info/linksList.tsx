import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router";

export interface LinksListProps {
  title: string;
  links: { title: string; description: string; url: string }[];
}

const LinksList = ({ title, links }: LinksListProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography
        variant="h5"
        color={theme.palette.secondary.main}
        fontWeight={"bold"}
        component="h2"
      >
        {title}
      </Typography>
      {links?.map(
        (
          link: { title: string; description: string; url: string },
          idx: number
        ) => (
          <Box key={idx} sx={{ mt: 2 }}>
            <Link
              to={link.url}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid
                container
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                mb={2}
              >
                <Grid size={{ xs: 2, sm: 1 }}>
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${
                      new URL(link.url).hostname
                    }&sz=32`}
                    alt={`${link.title} favicon`}
                    style={{ verticalAlign: "middle", marginRight: 8 }}
                  />
                </Grid>
                <Grid size={{ xs: 10, sm: 3 }}>
                  <Typography variant="h6" color={theme.palette.secondary.main}>
                    {link.title}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 2, sm: 0 }}></Grid>
                <Grid size={{ xs: 10, sm: 8 }}>
                  <Typography
                    variant="body1"
                    color={theme.palette.text.secondary}
                  >
                    {link.description}
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Box>
        )
      )}
    </Box>
  );
};

export default LinksList;
