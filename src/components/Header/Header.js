import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";

function Header() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/">
              <button className="flex">
                <i className="material-icons">arrow_back</i>
              </button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;
