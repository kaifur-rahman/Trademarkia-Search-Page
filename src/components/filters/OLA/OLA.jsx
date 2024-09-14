import Box from "@mui/material/Box";
import OLATabs from "./OLATabs";

function OLA() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "16.5rem",
        mt: "1.5rem",
        width: { xs: "90%", md: "100%" },
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.06)", // Multiple drop shadows
        borderRadius: "8px",
        p: "1rem",
      }}
    >
      <OLATabs />
    </Box>
  );
}

export default OLA;
