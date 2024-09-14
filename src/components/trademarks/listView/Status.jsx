import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SyncIcon from "@mui/icons-material/Sync";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { colorScheme } from "../../../constants/colorScheme";

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

function Status({ data }) {
  const statusType = data.status || "N/A";
  const registrationDate = data.registration_date
    ? formatDate(data.registration_date)
    : "Unknown Date";
  const renewalDate = data.renewal_date
    ? formatDate(data.renewal_date)
    : "Unknown Date";

  const isRegistered = statusType.toLowerCase() === "registered";
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
            fontSize: { xs: "0.8rem", md: "0.9rem" },
            color: isRegistered
              ? colorScheme.green
              : statusType == "pending"
              ? colorScheme.orangeDark
              : statusType == "abandoned"
              ? colorScheme.red
              : colorScheme.blue,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              fontSize: { xs: "0.5rem", md: "0.8rem" },
              color: isRegistered
                ? colorScheme.green
                : statusType == "pending"
                ? colorScheme.orangeDark
                : statusType == "abandoned"
                ? colorScheme.red
                : colorScheme.blue,
            }}
          />
          {isRegistered
            ? "Live/Registered"
            : statusType == "pending"
            ? "Pending"
            : statusType == "abandoned"
            ? "Abandoned"
            : "Others"}
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
            {registrationDate}
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
          {renewalDate}
        </Typography>
      </Box>
    </Box>
  );
}

export default Status;
