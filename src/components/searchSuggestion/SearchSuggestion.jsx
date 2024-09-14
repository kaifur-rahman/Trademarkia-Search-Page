import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { colorScheme } from "../../constants/colorScheme";

function SearchSuggestion() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        mt: "1rem",
        mb: "1rem",
      }}
    >
      {/* text */}
      <Typography variant="body2" gutterBottom sx={{ color: "#4B5563" }}>
        Also try searching for:
      </Typography>

      {/* suggestions */}
      <Button
        size="small"
        variant="contained"
        sx={{
          backgroundColor: colorScheme.orangeLight,
          color: colorScheme.orangeDark,
          borderColor: colorScheme.orangeDark,
          border: "1px solid",
          textTransform: "none",
          borderRadius: "10px",
          width: "3.6rem",
          height: "2rem",
        }}
      >
        nike*
      </Button>
      <Button
        size="small"
        variant="contained"
        sx={{
          backgroundColor: colorScheme.orangeLight,
          color: colorScheme.orangeDark,
          borderColor: colorScheme.orangeDark,
          border: "1px solid",
          textTransform: "none",
          borderRadius: "10px",
          width: "3.6rem",
          height: "2rem",
        }}
      >
        nike*
      </Button>
    </Box>
  );
}

export default SearchSuggestion;
