import { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { SearchContext } from "../../contexts/SearchContext";
import FormControlLabel from "@mui/material/FormControlLabel";

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function CheckboxLabels({ filterKey, data = [] }) {
  const { filters, updateFilters } = useContext(SearchContext);

  // Handle checkbox change
  const handleChange = (key) => {
    let updatedSelectedValues = Array.isArray(filters[filterKey])
      ? [...filters[filterKey]]
      : [];

    if (updatedSelectedValues.includes(key)) {
      updatedSelectedValues = updatedSelectedValues.filter(
        (item) => item !== key
      ); // Deselect
    } else {
      updatedSelectedValues.push(key); // Select
    }

    // Update filters in SearchContext based on filterKey
    updateFilters(filterKey, updatedSelectedValues);
  };

  // Render all data, and determine the checked state based on filters
  return (
    <FormGroup sx={{ mt: "1rem" }}>
      {data.length > 0 ? (
        data.map((obj) => (
          <FormControlLabel
            key={obj.key}
            control={
              <Checkbox
                checked={filters[filterKey]?.includes(obj.key) || false}
                onChange={() => handleChange(obj.key)}
                sx={{ mt: "0.5rem" }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  mt: "0.5rem",
                }}
              >
                {capitalizeWords(obj.key)}{" "}
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "normal",
                    fontSize: "0.875rem",
                    color: "#555",
                  }}
                >
                  ({obj.doc_count})
                </Typography>
              </Typography>
            }
          />
        ))
      ) : (
        <Typography variant="body2">No options available</Typography>
      )}
    </FormGroup>
  );
}
