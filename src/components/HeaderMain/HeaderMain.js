import * as React from "react";

import { Divider, Box, AppBar, Toolbar, Button, Container, MenuItem, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HeaderMain() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: "40px",
                px: 0,
              }}
            >
              <span className="text-xl">
                <p>
                  <b>Cash On Delivery</b>
                </p>
              </span>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                color="primary"
                variant="contained"
                style={{ borderRadius: 40 }}
                href="/login"
              >
                Entrar
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "40dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mb: "20px",
                      flexGrow: 1,
                    }}
                  >
                    <span className="text-xl">
                      <p>
                        <b>Menu</b>
                      </p>
                    </span>
                  </Box>
                  <Divider />
                  <MenuItem className="mt-[20px]">
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                      href="/login"
                    >
                      Entrar
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default HeaderMain;
