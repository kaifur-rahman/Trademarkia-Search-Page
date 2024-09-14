import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Display() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(newAlignment);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "8rem",
        mt: "1.5rem",
        width: { xs: "90%", md: "100%" },
        mb: "1rem",
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.06)", // Multiple drop shadows
        borderRadius: "8px",
        p: "1rem",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: "1rem" }}
      >
        Display
      </Typography>
      <Box sx={{ mt: "1rem", width: "100%" }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ width: "100%", borderRadius: "1rem" }}
        >
          <ToggleButton
            value="grid"
            aria-label="left aligned"
            sx={{
              borderRadius: "0.6rem",
              width: "100%",
              backgroundColor: "#F1F1F1",
            }}
          >
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontWeight: "600",
                borderRadius: "0.5rem",
                textTransform: "none",
              }}
            >
              Grid View
            </Button>
          </ToggleButton>
          <ToggleButton
            value="list"
            aria-label="centered"
            sx={{
              borderRadius: "0.6rem",
              width: "100%",
              backgroundColor: "#F1F1F1",
            }}
          >
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontWeight: "600",
                borderRadius: "0.5rem",
                textTransform: "none",
              }}
            >
              List View
            </Button>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}

export default Display;
