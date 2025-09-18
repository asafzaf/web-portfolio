import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
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
          <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label={data.contact.form?.full_name || "Your Name"}
              name="full_name"
              color="secondary"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
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
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
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
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
