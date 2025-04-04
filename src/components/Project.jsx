import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const categories = ["All", "React", "Next.js", "Django", "Php","MERN","BlockChain","ML"];

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");

  // Fetch JSON Data
  useEffect(() => {
    fetch("/projects.json") 
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const filteredProjects =
    filteredCategory === "All"
      ? projects
      : projects.filter((project) => project.category === filteredCategory);

  return (
    <Box sx={{ backgroundColor: "#181818", color: "white", padding: "50px" }} id="project">
    <div className="mt-5" style={{maxWidth: "1400px", margin: "0 auto"}}> 
    <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ marginBottom: 3 }}>
        My Projects
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ marginBottom: 3 }}>
        Here are some of the projects I've worked on:
      </Typography>

      {/* Category Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", marginBottom: 4 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filteredCategory === category ? "contained" : "outlined"}
            onClick={() => setFilteredCategory(category)}
            sx={{
              color: filteredCategory === category ? "white" : "#FD6F00",
              backgroundColor: filteredCategory === category ? "#FD6F00" : "transparent",
              border: "1px solid #FD6F00",
              "&:hover": { backgroundColor: "#FD6F00", color: "white" },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Project Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{height: "62vh", overflowY: "auto" }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card
                  sx={{
                    backgroundColor: "#222",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ borderRadius: "10px 10px 0 0" }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center",cursor: "pointer" }}
                      >
                        {project.title} 
                        <OpenInNewIcon sx={{ fontSize: 16, marginLeft: 1 }} />
                      </a>
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" textAlign="center" sx={{ marginTop: 4 }}>
            Loading projects...
          </Typography>
        )}
      </Grid>
    </div>
    </Box>
  );
};

export default Project;
