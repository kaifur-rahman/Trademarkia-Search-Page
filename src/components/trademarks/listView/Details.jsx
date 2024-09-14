import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

function Details({ data }) {
  const registrationDate = data.registration_date
    ? formatDate(data.registration_date)
    : "Unknown Date"; 

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", 
        gap: "0.5rem", 
      }}
    >
      {/* Mark name and Owner */}
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
        >
          {data.mark_name || "Unknown Mark"} 
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ fontSize: "0.875rem", fontWeight: "regular" }}
        >
          {data.owner_name || "Unknown Owner"}{" "}
          {/* Display dynamic owner name */}
        </Typography>
      </Box>
      {/* Registration number */}
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
        >
          {data.registration_number || "Unknown Number"}{" "}
          {/* Display dynamic registration number */}
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ fontSize: "0.75rem", fontWeight: "regular" }}
        >
          {registrationDate} {/* Display formatted registration date */}
        </Typography>
      </Box>
    </Box>
  );
}

export default Details;
