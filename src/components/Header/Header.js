import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Container, Typography } from "@mui/material";


function Header() {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={() => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "#002C4B",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
            })}
          >
            <NavLink to="/">
              <button className="flex">
                <i className="material-icons">arrow_back</i>
              </button>
            </NavLink>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 0,
              }}
            >
              <Typography component="h1" variant="h5" className="animate-fade-left animate-delay-200">
                Cash On Delivery
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
