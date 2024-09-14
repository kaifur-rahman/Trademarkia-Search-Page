import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchSuggestion from "../searchSuggestion/SearchSuggestion";
import ListView from "./listView/ListView";
import Filter from "../filters/Filter";

function Trademarks() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container spacing={2}>
        {/* trademarks */}
        <Grid item xs={12} md={9}>
          <SearchSuggestion />
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
