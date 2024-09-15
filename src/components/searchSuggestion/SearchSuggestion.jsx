import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { colorScheme } from "../../constants/colorScheme";

const generateSuggestions = (query = "") => {
  if (!query) {
    return [];
  }

  const suggestions = [
    `${query}*`, // Add * at the end
    `${query.slice(0, -1)}*`, // Remove last character and add *
    `*${query.slice(1)}`, // Remove first character and add *
    `${query[0]}*${query.slice(1)}`, // Add * in the middle
  ];
  return suggestions;
};

function SearchSuggestion({ query }) {
  const [noResult, setNoResult] = useState(false);
  const { updateFilters, error, loading } = useContext(SearchContext);

  useEffect(() => {
    if (error === "No results found.") {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  }, [error]);

  // Handle when a suggestion is clicked
  const handleSuggestionClick = (newQuery) => {
    updateFilters("input_query", newQuery);
  };

  // Generate search suggestions
  const suggestions = generateSuggestions(query);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        mt: "1rem",
        mb: "1rem",
        alignItems: "center",
        overflowX: "auto",
        height: { xs: "3.5rem", md: "3rem" },
      }}
    >
      {noResult ? (
        <Typography
          variant="body2"
          gutterBottom
          sx={{ color: "#000000", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {`The "${query}" Trademark may be available.`}
        </Typography>
      ) : (
        <>
          <Typography variant="body2" gutterBottom sx={{ color: "#4B5563" }}>
            Also try searching for:
          </Typography>

          {/* Suggestions - Only show if loading is false */}
          {!loading &&
            suggestions.map((suggestion, index) => (
              <Button
                key={index}
                size="small"
                variant="contained"
                onClick={() => handleSuggestionClick(suggestion)}
                sx={{
                  backgroundColor: colorScheme.orangeLight,
                  color: colorScheme.orangeDark,
                  borderColor: colorScheme.orangeDark,
                  border: "1px solid",
                  textTransform: "none",
                  borderRadius: "10px",
                  minWidth: "4rem",
                  height: "2rem",
                }}
              >
                {suggestion}
              </Button>
            ))}
        </>
      )}
    </Box>
  );
}

export default SearchSuggestion;
