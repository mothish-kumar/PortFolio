import React from "react";
import { motion } from "framer-motion";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";


const Home = () => {

  return (

    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 text-white " style={{ background: "#181818", padding: "20px" }} id="home">
    <div className="container my-auto">
      <div className="row align-items-center">
        
        {/* Profile Image (Left Side) */}
        <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0 flex-column mt-5">
          <div className="d-flex justify-content-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <img src="/start.png" alt="Profile" className="img-fluid w-100 h-100 mx-auto" />
          </motion.div>
          </div>
            {/* Social Media Icons */}
            <div className="d-flex gap-3 justify-content-center mt-4 mb-3">
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

        </div>

        {/* Text Section (Right Side) */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h6 className="fw-bold fs-5">Hi I am</h6>
          <h4 className="fw-bold text-warning fs-3">Mothish Kumar</h4>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            <motion.h1
                className="fw-bold"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }} // Responsive font size
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
            >
                {Array.from("Full Stack Developer").map((char, index) => (
                <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    {char}
                </motion.span>
                ))}
            </motion.h1>
            </motion.div>

          <p className="mt-3 text-light fs-5" style={{textAlign:'justify'}}>
            Welcome to my portfolio! I specialize in developing user-friendly web applications with modern technologies. Passionate about coding and problem-solving, I bring creative and efficient solutions to the table.
          </p>

          {/* Hire Me Button & Social Icons in One Row */}
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3">
          <Button
            onClick={() => {
                window.open(
                "mailto:your-email@example.com?subject=Hiring Inquiry&body=Hi, I'm interested in working with you!",
                "_blank"
                );
            }}
            sx={{
                backgroundColor: "#FD6F00",
                color: "white",
                borderRadius: "5px",
                padding: "10px 15px",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#E65C00" }
            }}
            >
            Hire Me
            </Button>


          </div>
        </div>

      </div>
    </div>
  </div>

  );
};

export default Home;
