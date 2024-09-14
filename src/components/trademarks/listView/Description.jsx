import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import groupLogo from "../../../assets/group.png";

function Description({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {/* Text description at the top */}
      <Box
        sx={{
          width: "100%",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontWeight: "100",
            fontSize: "0.875rem",
          }}
        >
          Computer services, Social Media, Networking, Virtual Communities,
          Community
        </Typography>
      </Box>

      {/* Icons and class description in a row */}
      <Box
        sx={{ display: "flex", gap: "1rem", alignItems: "center", mt: "1rem" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={groupLogo} alt="Class Logo" style={{ height: "1rem" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "0.75rem",
              ml: "0.5rem",
            }}
          >
            Class 45
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={groupLogo} alt="Class Logo" style={{ height: "1rem" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "0.75rem",
              ml: "0.5rem",
            }}
          >
            Class 8
          </Typography>
        </Box>

        {/* Optionally add "more" dots if necessary */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "0.8rem",
              ml: "0.5rem",
            }}
          >
            •••
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Description;
