import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import groupLogo from "../../../assets/group.png";

function Description({ data }) {
  const { description = "N/A", classCodes = [] } = data;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {/* Render the description dynamically */}
      <Box
        sx={{
          width: "100%",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography
          variant="caption"
          gutterBottom
          sx={{
            fontWeight: "100",
            fontSize: "0.875rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description || "No description available"}
        </Typography>
      </Box>

      {/* Render the class codes dynamically */}
      <Box
        sx={{ display: "flex", gap: "1rem", alignItems: "center", mt: "1rem" }}
      >
        {classCodes.length > 0 ? (
          classCodes.slice(0, 2).map((classCode, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={groupLogo}
                alt="Class Logo"
                style={{ height: "1rem" }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  ml: "0.5rem",
                }}
              >
                Class {classCode}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No class codes available</Typography>
        )}

        {/* Optionally render more dots if there are more than two class codes */}
        {classCodes.length > 2 && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "0.6rem",
                ml: "-0.4rem",
              }}
            >
              •••
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Description;
