import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { colorScheme } from "../../constants/colorScheme";

function Searchbox() {
  return (
    <Grid container>
      <Grid item xs={10} md={10}>
        <TextField
          id="searchbar"
          variant="outlined"
          size="small"
          placeholder="Search Trademark Here e.g. Mickey Mouse"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
              "& fieldset": {
                borderColor: colorScheme.light, //default
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
