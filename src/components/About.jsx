import React from "react";
import { Box, Typography, LinearProgress, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const skills = [
  { name: "MERN", value: 90 },
  { name: "Php", value: 80 },
  { name: "Django", value: 85 },
  { name: "Next Js", value: 88 },
];

// Custom Progress Bar Style
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: "#444",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#FD6F00",
  },
}));

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: "50px",
        backgroundColor: "#181818",
        color: "white",
        height: "80vh",
        overflowY: "auto",
      }}
      id="about"
    >
    
      {/* About Me Text & Skills */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h3" fontWeight="bold">
          About Me
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: "white" }} className="fs-5">
          I am a passionate Full Stack Developer with expertise in both front-end and back-end technologies.
          With a background in Master of Computer Applications (MCA) and hands-on experience in frameworks like 
          React, Express.js, Django, and Next.js, I craft seamless digital experiences.
        </Typography>

        {/* Skill Bars */}
        <Box sx={{ marginTop: 3 }}>
          {skills.map((skill) => (
            <Box key={skill.name} sx={{ marginBottom: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", marginBottom: 0.5 }}>
                {skill.name}
              </Typography>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.value}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <StyledLinearProgress variant="determinate" value={skill.value} />
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
        {/* Profile Image - Hidden on Small Screens */}
        {!isSmallScreen && (
        <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <img src="/start.png" alt="Profile" className="img-fluid w-100 h-100 mx-auto" />
        </motion.div>
        </div>
      )}
    </Box>
  );
};

export default About;
