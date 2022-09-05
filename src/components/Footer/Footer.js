import React from "react";
// MUI
import { Link, Typography, Box } from "@mui/material";

const Footer = () => {
  const styles = {
    footerWrapper: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      mb: 2,
    },
  };
  return (
    <Box sx={styles.footerWrapper} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Artist's Eve
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
