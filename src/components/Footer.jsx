import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import iconImg from '/icon.png'; 
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        color: "white",
        textAlign: "center",
        padding: "30px 0",
        height: { xs: "50vh", sm: "50vh", md: "30vh", lg: "30vh", xl: "30vh" }
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
      <img
            src={iconImg}
            alt="Mothish Kumar"
          />
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          mb: 2,
        }}
      >
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About Me</a>
        <a href="#service" style={styles.link}>Services</a>
        <a href="#project" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </Box>

      {/* Social Media Icons */}
      <div className="d-flex gap-3 justify-content-center mt-4 mb-5">
                    {/* GitHub */}
                    <motion.div
                        initial={{ color: "#ffffff" }}
                        whileHover={{ color: "#000", scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://github.com/mothish-kumar", "_blank", "noopener,noreferrer")}
                    >
                        <GitHub style={{ fontSize: "30px" }} />
                    </motion.div>

                    {/* Instagram */}
                    <motion.div
                        initial={{ color: "#ffffff" }}
                        whileHover={{ color: "#E1306C", scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.instagram.com/mothu_tn?igsh=dmRwcnNpeG1yNm1s", "_blank", "noopener,noreferrer")}
                    >
                        <Instagram style={{ fontSize: "30px" }} />
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div
                        initial={{ color: "#ffffff" }}
                        whileHover={{ color: "#0077B5", scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.linkedin.com/in/mothishkumar/", "_blank", "noopener,noreferrer")}
                    >
                        <LinkedIn style={{ fontSize: "30px" }} />
                    </motion.div>
                </div>

      {/* Copyright Section */}
      <Typography variant="body1" >
        © 2025 <span style={{ color: "#FD6F00", fontWeight: "bold" }}>Mothish</span> All Rights Reserved, Inc.
      </Typography>
    </Box>
  );
};

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "18px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
};

export default Footer;
