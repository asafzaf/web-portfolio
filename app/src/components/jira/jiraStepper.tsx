import {
  Typography,
  Box,
  Paper,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useJira } from "../../hooks/useJiraApi";
import { useEffect, useState } from "react";
import { generateDateFormatter } from "../../utils/date.formater";

interface JiraIssue {
  key: string;
  fields: {
    summary: string;
    status: {
      name: string;
    };
    resolutiondate: string | null;
  };
}

export default function JiraStepper() {
  const theme = useTheme();
  const [issues, setIssues] = useState<JiraIssue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { useGetProjectIssues } = useJira();

  const getProjectIssues = useGetProjectIssues;

  useEffect(() => {
    const fetchIssues = async (key: string) => {
      try {
        setLoading(true);
        const issuesResponse = await getProjectIssues.mutateAsync(key);
        if (issuesResponse) setIssues(issuesResponse.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchIssues("WP");
  }, []);

  return (
    <section
      style={{
        minHeight: "50vh",
        padding: "5rem 3rem",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "100vw", margin: "0 auto" }}>
        <Typography
          variant="h4"
          align="center"
          color={theme.palette.secondary.main}
          gutterBottom
          sx={{ mt: 4 }}
        >
          This project managed by using Jira
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color={theme.palette.secondary.main}
          gutterBottom
          sx={{ mt: 4 }}
        >
          Issues Overview
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            gap: 2,
            py: 2,
          }}
        >
          {error ? (
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              fontWeight={600}
              gutterBottom
            >
              Error loading Jira Issues
            </Typography>
          ) : loading ? (
            <CircularProgress></CircularProgress>
          ) : issues.length > 0 ? (
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              fontWeight={600}
              gutterBottom
            >
              No Issues Found
            </Typography>
          ) : (
            issues.map((issue) => (
              <Paper
                key={issue.key}
                sx={{
                  minWidth: 220,
                  maxWidth: 260,
                  p: 2,
                  flex: "0 0 auto",
                  border: "2px solid #1976d2",
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor:
                    issue.fields.status.name === "Done"
                      ? "#acfdb2ff"
                      : issue.fields.status.name === "In Progress"
                      ? "#fef58aff"
                      : "#ffb571ff",
                }}
              >
                <Typography
                  variant="h6"
                  color={theme.palette.secondary.main}
                  fontWeight={600}
                  gutterBottom
                >
                  {issue.key}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.secondary.main}
                  fontWeight={600}
                  gutterBottom
                >
                  {issue.fields.summary}
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.secondary.main}
                  sx={{ mb: 1 }}
                >
                  Status: <b>{issue.fields.status.name}</b>
                </Typography>
                {issue.fields.resolutiondate && (
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color={theme.palette.success.main}
                  >
                    Done at:{" "}
                    {generateDateFormatter(issue.fields.resolutiondate)}
                  </Typography>
                )}
              </Paper>
            ))
          )}
        </Box>
        <Paper
          square
          elevation={0}
          color={theme.palette.secondary.main}
          sx={{ p: 2, mt: 2, background: theme.custom.background }}
        >
          <Typography variant="body2" color={theme.palette.secondary.main}>
            Total Issues: {issues.length}
          </Typography>
        </Paper>
      </Box>
    </section>
  );
}
