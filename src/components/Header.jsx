import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import DownloadIcon from '@mui/icons-material/Download';
import iconImg from '../assets/icon.png';

const Header = ({ onNavClick, refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { label: "Home", ref: refs.homeRef },
    { label: "About Me", ref: refs.aboutRef },
    { label: "Services", ref: refs.servicesRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ✅ Detect Scroll and Update Active Menu Item
  useEffect(() => {
    const handleScroll = () => {
      for (let item of navItems) {
        if (item.ref.current) {
          const rect = item.ref.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
            setActiveItem(item.label);
            break; // Stop at the first match
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="fixed" sx={{ background: "#181818", padding: "10px 20px", zIndex: 1100 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <img src={iconImg} alt="Icon Alt"/>
        </Box>
        
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1, color: "#FD6F00" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                sx={{
                  color: activeItem === item.label ? "#FD6F00" : "white",
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                  fontWeight: activeItem === item.label ? "bold" : "normal",
                  textTransform: "none",
                }}
                onClick={() => {
                  setActiveItem(item.label);
                  onNavClick(item.ref);
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>

        {/* CV Download Button */}
        <Box>
          <a 
            href="/Resume.pdf" 
            download="Mothish_kumar_Resume.pdf" 
            style={{
              backgroundColor: "#FD6F00",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 8px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center"
            }} className="fw-bold"
          >
            <DownloadIcon style={{ marginRight: "5px" }} /> Download CV
          </a>
        </Box>
        
        {/* Mobile Menu Button */}
        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { md: "none" } }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ zIndex: 1300 }}>
        <List sx={{ width: 250, background: "#181818", height: "100vh", color: "white" }}>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.label} 
              onClick={() => { 
                onNavClick(item.ref);
                setActiveItem(item.label);
                handleDrawerToggle(); 
              }}
              sx={{
                backgroundColor: activeItem === item.label ? "#FD6F00" : "transparent",
                "&:hover": { scale:1.05,transition: "0.3s"}
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{
                  color: activeItem === item.label ? "black" : "white",
                  fontWeight: activeItem === item.label ? "bold" : "normal"
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
