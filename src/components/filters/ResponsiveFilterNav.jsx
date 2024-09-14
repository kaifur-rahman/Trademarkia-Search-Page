import * as React from "react";
import Box from "@mui/material/Box";
import Filter from "./Filter";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { colorScheme } from "../../constants/colorScheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export default function ResponsiveFilterNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  // Function for xs screen
  const handleXs = () => {
    setOpen(true);
  };

  // Function for md screen
  const handleMd = () => {};

  const handleClick = () => {
    if (isXs) {
      handleXs();
    } else if (isMd) {
      handleMd();
    }
  };

  const DrawerList = (
    // main content
    <Box sx={{ width: "100%" }} role="presentation">
      {/* close button */}
      <Box
        onClick={toggleDrawer(false)}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#ffffff",
          width: "100%",
          backgrondColor: "#ffffff!important",
          height: "3.3rem",
          mt: "1rem",
          p: "0.3rem",
        }}
      >
        <IconButton
          aria-label="close"
          sx={{ backgroundColor: colorScheme.orangeLight }}
        >
          <ClearOutlinedIcon sx={{ color: colorScheme.orangeDark }} />
        </IconButton>
        <Divider sx={{ mt: "0.4rem" }} />
      </Box>
      {/* filers */}
      <Filter />
    </Box>
  );

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="outlined"
        size="small"
        sx={{
          borderColor: { xs: "#C8C8C8", md: colorScheme.blue },
          color: { xs: colorScheme.light, md: colorScheme.blue },
          mr: "0.5rem",
          textTransform: "none",
          borderRadius: "0.5rem",
        }}
        startIcon={
          <FilterAltIcon
            sx={{ color: { xs: colorScheme.light, md: colorScheme.blue } }}
          />
        }
      >
        Filter
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
