import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../assets/logo.png";
import Searchbox from "./Searchbox";
import Divider from "@mui/material/Divider";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#F8FAFE", height: "118px" }}
      >
        {/* container */}
        <Grid
          container
          sx={{ alignItems: "center", height: "100%" }}
          rowSpacing={1}
          columnGap={2}
        >
          {/* logo item here */}
          <Grid item xs={12} sm={12} md={2}>
            <Box
              sx={{
                maxHeight: "1.5rem",
                maxWidth: "10rem",
                ml: "5rem",
                mt: { xs: "0.5rem", md: "0" },
              }}
            >
              <img src={logo} style={{ width: "100%" }}></img>
            </Box>
          </Grid>
          {/* search box item here*/};
          <Grid item xs={12} sm={12} md={6}>
            <Searchbox />
          </Grid>
        </Grid>
        <Divider component="li" />
      </AppBar>
    </Box>
  );
}
