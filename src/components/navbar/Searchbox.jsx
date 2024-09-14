import { useContext, useState, useCallback, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { colorScheme } from "../../constants/colorScheme";
import { SearchContext } from "../contexts/SearchContext";
import debounce from "lodash/debounce";

function Searchbox() {
  const { filters, updateFilters } = useContext(SearchContext);
  const [query, setQuery] = useState(filters.input_query);

  // Sync local state with filters.input_query whenever it changes
  useEffect(() => {
    setQuery(filters.input_query);
  }, [filters.input_query]);

  // Debounced function to update query in the context
  const debouncedUpdateQuery = useCallback(
    debounce((newQuery) => {
      updateFilters("input_query", newQuery);
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedUpdateQuery(newQuery);
  };

  const handleSearch = () => {
    updateFilters("input_query", query);
  };

  return (
    <Grid container sx={{ justifyContent: "flex-start", alignItems: "center" }}>
      <Grid item xs={10} md={10}>
        <TextField
          id="searchbar"
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Search Trademark Here e.g. Nike"
          value={query}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
              "& fieldset": { borderColor: "#636363" },
              "&:hover fieldset": { borderColor: "#000000" },
              "&.Mui-focused fieldset": { borderColor: "#000000 !important" },
            },
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon
                position="start"
                sx={{ mr: "0.5rem", color: colorScheme.light }}
              />
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
          onClick={handleSearch}
        >
          Search
        </Button>
        {/* Small screen search button */}
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
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleSearch}
          >
            <SearchIcon sx={{ backgroundColor: "primary", color: "#ffffff" }} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Searchbox;
