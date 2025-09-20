import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import { useContact } from "../hooks/useContactApi";

const Contact = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const { useCreateContact } = useContact();

  const createContact = (data: typeof formData) => {
    useCreateContact.mutate(data, {
      onSuccess: () => {
        setSubmissionSuccess(true);
        setFormData({ full_name: "", email: "", message: "" });
      },
      onError: (error) => {
        setSubmissionError("Failed to submit the form. Please try again.");
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(false);
    createContact(formData);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 30000); // Timeout after 30 seconds
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "5rem 3rem",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box component="section" id="contact" sx={{ py: 6, textAlign: "center" }}>
        <Typography
          variant="h2"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          {data.contact.title}
        </Typography>
        <Typography variant="h5" color={theme.palette.secondary.main}>
          {data.contact.description}
        </Typography>
        <Box sx={{ mt: 4, mb: 4 }}>
          <Button
            variant="text"
            size="large"
            href={`mailto:${data.contact.email}`}
            sx={{
              color: theme.palette.secondary.main,
              ":hover": {
                color: theme.custom.button.color,
                background: theme.custom.button.hoverBackground,
              },
            }}
          >
            <MailOutlineIcon key={data.contact.email} sx={{ mr: 1 }} />
            {data.contact.emailButton || "Get in Touch"}
          </Button>
        </Box>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          sx={{ mt: 2 }}
        >
          {data.contact.referToForm}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: 400, margin: "0 auto" }}
          >
            {submissionSuccess ? (
              <Typography variant="body1" color="success.main" sx={{ mb: 2 }}>
                {data.contact.form?.successMessage ||
                  "Your message has been sent successfully!"}
              </Typography>
            ) : (
              <>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <TextField
                    label={data.contact.form?.full_name || "Your Name"}
                    name="full_name"
                    color="secondary"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      sx: { color: theme.palette.secondary.main },
                    }}
                    InputLabelProps={{
                      sx: { color: theme.palette.secondary.main },
                    }}
                  />

                  <TextField
                    label={data.contact.form?.email || "Your Email"}
                    name="email"
                    type="email"
                    color="secondary"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      sx: { color: theme.palette.secondary.main },
                    }}
                    InputLabelProps={{
                      sx: { color: theme.palette.secondary.main },
                    }}
                  />

                  <TextField
                    label={data.contact.form?.message || "Your Message"}
                    name="message"
                    color="secondary"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      sx: { color: theme.palette.secondary.main },
                    }}
                    InputLabelProps={{
                      sx: { color: theme.palette.secondary.main },
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    background: theme.custom.button.hoverBackground,
                    color: theme.custom.button.hoverColor,
                    ":hover": {
                      background: theme.custom.button.hoverBackground,
                      color: theme.custom.button.color,
                      opacity: 0.5,
                    },
                  }}
                >
                  {data.contact.form?.send || "Send Message"}
                  {isSubmitting && <CircularProgress size={24} />}
                  {!isSubmitting && <SendIcon sx={{ ml: 1 }} />}
                </Button>
                {submissionError && (
                  <Typography variant="body1" color="error">
                    {data.contact.form?.errorMessage ||
                      "An error occurred. Please try again."}
                  </Typography>
                )}
              </>
            )}
          </form>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
