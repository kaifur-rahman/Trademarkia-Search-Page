import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { colorScheme } from "../../constants/colorScheme";

function Searchbox() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Grid item xs={10} md={10}>
        <TextField
          id="searchbar"
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Search Trademark Here e.g. Mickey Mouse"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
              "& fieldset": {
                borderColor: "#636363", //default
              },
              "&:hover fieldset": {
                borderColor: "#000000", //on hover
                borderWidth: "0.01rem",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000000 !important", // when focused
                borderWidth: "0.01rem",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon
                position="start"
                sx={{ mr: "0.5rem", color: colorScheme.light }}
              ></SearchIcon>
            ),
          }}
        />
      </Grid>
      <Grid item xs={2} md={2} sx={{ p: "0.1rem" }}>
        <Button
          variant="contained"
          sx={{
            ml: "1rem",
            borderRadius: "12px",
            display: { xs: "none", md: "block" },
            fontSize: "0.8rem",
            height: "2.7rem",
            width: "7rem",
          }}
        >
          Search
        </Button>

        <Box
          sx={{
            backgroundColor: colorScheme.orangeDark,
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="search"
            size="small"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <SearchIcon sx={{ backgroundColor: "primary", color: "#ffffff" }} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Searchbox;
