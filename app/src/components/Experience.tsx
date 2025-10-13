import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
};

const Experience = () => {
  const theme = useTheme();
  const { experienceData: data } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "5rem 3rem",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ py: 6, alignItems: "center", textAlign: "center" }}>
        <Typography
          variant="h2"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          {data.title}
        </Typography>
        {data.items.map((section: any, sectionIdx: any) => (
          <Box key={sectionIdx} sx={{ mb: 8, alignItems: "flex-start", textAlign: "start" }}>
            {/* Section Title */}
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: 4,
                fontWeight: "bold",
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              {section.title}
            </Typography>

            {/* Items */}
            {section.items.map((item: any, idx: any) => (
              <Card
                key={idx}
                sx={{
                  mb: 3,
                  borderRadius: 3,
                  boxShadow: 4,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {/* Left side */}
                <Box
                  sx={{
                    background: theme.palette.secondary.main,
                    color: "white",
                    flex: { xs: "0 0 100%", md: "0 0 25%" },
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    align="center"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    alignSelf="center"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {item.period}
                  </Typography>
                </Box>

                {/* Right side */}
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.secondary,
                        mb: 1,
                      }}
                    >
                      {item.role}
                    </Typography>

                    {item.points &&
                      item.points.map((point: string, i: number) => (
                        <Typography
                          key={i}
                          variant="body1"
                          sx={{ mb: 0.5, color: theme.palette.text.secondary }}
                        >
                          • {renderBold(point)}
                        </Typography>
                      ))}
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Experience;
