import React from 'react'
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";


const services = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces using React, JavaScript, Bootstrap, and CSS.",
    icon: <WebIcon sx={{ fontSize: 50, color: "#FD6F00" }} />,
  },
  {
    title: "Backend",
    description: "Developing robust and scalable backend applications using Node.js, Express.js, Django, and PHP.",
    icon: <StorageIcon sx={{ fontSize: 50, color: "#FD6F00" }} />,
  },
  {
    title: "Full Stack",
    description: "Providing end-to-end solutions by integrating frontend and backend technologies for seamless web applications.",
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 50, color: "#FD6F00" }} />,
  },
];
const Service = () => {

  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{background: '#181818', color: 'white', padding: '50px'}} id="service" >
      <div className='container text-center mt-5 mt-md -0  '>
      <Typography variant="h3" fontWeight="bold">
          Services
        </Typography>
        <Typography variant='body1' sx={{ marginTop: 2, color: 'white' }} className='fs-5'>
        I offer a range of web development services tailored to your needs:
        </Typography>
        <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#181818",
      }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            sx={{
              width: isSmallScreen ? "90%" : "300px",
              backgroundColor: "#222",
              color: "white",
              textAlign: "center",
              padding: 2,
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                boxShadow: "0px 6px 15px rgba(253, 111, 0, 0.5)",
                scale: 1.05,
              },
            }}
          >
            <CardContent>
              {service.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: "white" }} style={{textAlign:'left'}} className='text-center'>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
    </div>
    </Box>
  )
}

export default Service