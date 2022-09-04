import React from "react";
// MUI
import { Link, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        pb: 2,
        bottom: 0,
        textAlign: "center",
      }}
      component="footer"
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Artist's Eve
        </Link>{" "}
        {new Date().getFullYear()}
        {" - Powered by Bands in Town"}
      </Typography>
    </Box>
  );
};

export default Footer;
