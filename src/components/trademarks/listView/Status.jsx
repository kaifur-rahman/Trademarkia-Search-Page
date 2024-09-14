import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SyncIcon from "@mui/icons-material/Sync";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { colorScheme } from "../../../constants/colorScheme";

function Status({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: colorScheme.green,
          }}
        >
          <FiberManualRecordIcon
            sx={{ fontSize: "0.8rem", color: colorScheme.green }}
          />
          Live/Registered
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontSize: "0.875rem", fontWeight: "100" }}
        >
          on <span style={{ fontWeight: "bold" }}>25 Oct 2008.</span>
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mt: "0.5rem" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
        >
          <SyncIcon
            sx={{
              fontSize: "1.1rem",
              color: colorScheme.red,
              fontWeight: "bold",
            }}
          />
          26 Dec 2027
        </Typography>
      </Box>
    </Box>
  );
}

export default Status;
