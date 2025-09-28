import { Typography, Box, Paper, useTheme } from "@mui/material";
import { useJira } from "../../hooks/useJiraApi";
import { useEffect, useState } from "react";

interface JiraIssue {
  id: string;
  title: string;
  status: string;
  doneDate?: string;
}

const issues: JiraIssue[] = [
  {
    id: "1",
    title: "Setup project repo",
    status: "Done",
    doneDate: "2025-09-20",
  },
  { id: "2", title: "Implement login flow", status: "In Progress" },
  { id: "3", title: "Integrate Jira API", status: "To Do" },
  { id: "4", title: "Create UI components", status: "To Do" },
  { id: "5", title: "Write tests", status: "To Do" },
  { id: "6", title: "Deploy to production", status: "To Do" },
];

export default function JiraStepper() {
  const theme = useTheme();
  const [issues, setIssues] = useState<JiraIssue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { useGetProjectIssues } = useJira();

  const getProjectIssues = useGetProjectIssues;

  useEffect(() => {
    setLoading(true);
    getProjectIssues.mutate("WP", {
      onSuccess: (data) => {
        setIssues(data.data);
        setLoading(false);
      },
    });
  }, []);

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto" }}>
      <Typography
        variant="h4"
        align="center"
        color={theme.palette.secondary.main}
        gutterBottom
        sx={{ mt: 4 }}
      >
        This Project Management Using Jira's - Issues Overview
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
        {loading
          ? null
          : issues.map((issue) => (
              <Paper
                key={issue.id}
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
                {issue.fields.doneDate && (
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color={theme.palette.success.main}
                  >
                    {/* Done at: {issue.fields.doneDate} */}
                  </Typography>
                )}
              </Paper>
            ))}
      </Box>
      <Paper
        square
        elevation={0}
        color={theme.palette.secondary.main}
        sx={{ p: 2, mt: 2 }}
      >
        <Typography variant="body2" color={theme.palette.secondary.main}>
          Total Issues: {issues.length}
        </Typography>
      </Paper>
    </Box>
  );
}
