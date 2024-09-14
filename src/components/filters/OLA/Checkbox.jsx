import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function CheckboxLabels({ filterKey, data }) {
  const { filters, updateFilters } = useContext(SearchContext);
  const [selectedValues, setSelectedValues] = useState([]);

  // Sync state with filters on mount (to restore selected checkboxes)
  useEffect(() => {
    if (filters[filterKey]) {
      setSelectedValues(filters[filterKey]);
    }
  }, [filters, filterKey]);

  // Handle checkbox change
  const handleChange = (key) => {
    let updatedSelectedValues = [...selectedValues];

    if (updatedSelectedValues.includes(key)) {
      updatedSelectedValues = updatedSelectedValues.filter(
        (item) => item !== key
      ); // Deselect
    } else {
      updatedSelectedValues.push(key); // Select
    }

    setSelectedValues(updatedSelectedValues);

    // Update filters in SearchContext based on filterKey
    updateFilters(filterKey, updatedSelectedValues);
  };

  return (
    <FormGroup sx={{ mt: "1rem" }}>
      {data.map((obj) => (
        <FormControlLabel
          key={obj.key}
          control={
            <Checkbox
              checked={selectedValues.includes(obj.key)}
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
      ))}
    </FormGroup>
  );
}
