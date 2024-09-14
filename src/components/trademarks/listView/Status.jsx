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
        wordBreak: "break-word",
      }}
    >
      <Box sx={{ width: "100%", whiteSpace: "normal" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", md: "1rem" },
            color: colorScheme.green,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              fontSize: { xs: "0.5rem", md: "0.8rem" },
              color: colorScheme.green,
            }}
          />
          Live/Registered
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontSize: { xs: "0.5rem", md: "0.75rem" }, fontWeight: "100" }}
        >
          on{" "}
          <span
            style={{
              fontWeight: "bold",
              fontSize: { xs: "0.5rem", md: "0.75rem" },
            }}
          >
            25 Oct 2008.
          </span>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "0.1rem",
          mt: { xs: "0.5rem", md: "2rem" },
        }}
      >
        <SyncIcon
          sx={{
            fontSize: "1.1rem",
            color: colorScheme.red,
            fontWeight: "bold",
          }}
        />
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
        >
          26 Dec 2027
        </Typography>
      </Box>
    </Box>
  );
}

export default Status;
