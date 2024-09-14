import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchSuggestion from "../searchSuggestion/SearchSuggestion";
import ListView from "./listView/ListView";
import Filter from "../filters/Filter";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function Trademarks() {
  const { filters } = useContext(SearchContext);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container spacing={2}>
        {/* trademarks */}
        <Grid item xs={12} md={9}>
          {/* Pass the query prop to SearchSuggestion */}
          <SearchSuggestion query={filters.input_query} />
          <ListView />
        </Grid>
        {/* filters */}
        <Grid item xs={0} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Filter />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Trademarks;
