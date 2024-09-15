import { useContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { SearchContext } from "../contexts/SearchContext";

export default function ResultHeader() {
  const { totalCount, filters, loading, error } = useContext(SearchContext);

  return (
    <Box
      sx={{
        height: "4rem",
        alignItems: { xs: "flex-start", md: "center" },
        p: "0.1rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
    >
      {/* Result count */}
      <Box>
        {loading ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress size={20} sx={{ marginRight: "0.5rem" }} />
            <Typography variant="body2" sx={{ color: "#4B5563" }}>
              Loading results...
            </Typography>
          </Box>
        ) : error ? (
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: "700", color: "#4B5563" }}
          >
            {"No results"}
          </Typography>
        ) : (
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: "700", color: "#4B5563" }}
          >
            {`About ${totalCount.toLocaleString()} Trademarks found for “${
              filters.input_query
            }”`}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
