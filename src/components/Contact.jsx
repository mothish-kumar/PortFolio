import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import {toast} from 'sonner'

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const sendMessage = async () => {
    if (!message || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1357585515003510914/XxmJmYIAWp7oAbgXB5t7TvTo4lGeGYtLHs5QjkPN2U8nrNwaHDNGWZIXonw1H5nn2Vuf";

    const payload = {
      content: `📩 **New Contact From Website**\n**Email:** ${email}\n**Message:** ${message}`,
    };

    setIsLoading(true); 

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        color: "white",
        padding: "50px",
        height: "80vh",
      }} id='contact'
    >
      <div className="container mt-5">
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{ marginBottom: 3 }}
        >
          Let's Develop Together
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ marginBottom: 3, maxWidth: "800px", margin: "0 auto" }}
        >
          Passionate about crafting innovative and efficient web solutions.
          Whether it's building from scratch or optimizing existing projects,
          let's collaborate to bring ideas to life!
        </Typography>

        {/* Contact Form */}
        <Box className="d-flex flex-column gap-3 align-items-center justify-content-center mt-5">
          {/* Email Input */}
          <TextField
            variant="outlined"
            placeholder="Type your email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "500px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Message Input */}
          <TextField
            variant="outlined"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "500px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MessageIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Send Button with Loading Spinner */}
          <button
            className="btn btn-lg fw-bold d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#FD6F00",
              color: "white",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
            }}
            onClick={sendMessage}
            disabled={isLoading} 
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{ color: "white" }} />
            ) : (
              <TelegramIcon />
            )}
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </Box>
      </div>
    </Box>
  );
};

export default Contact;
