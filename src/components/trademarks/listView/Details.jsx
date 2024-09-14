import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Details({ data }) {
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
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
        >
          Meta Logo
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontSize: "0.875rem", fontWeight: "regular", mt: "-0.5rem" }}
        >
          Facebook Inc.
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mt: "2rem" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
        >
          73302505
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontSize: "0.7rem", fontWeight: "regular", mt: "-0.5rem" }}
        >
          23 Mar 1981
        </Typography>
      </Box>
    </Box>
  );
}

export default Details;
