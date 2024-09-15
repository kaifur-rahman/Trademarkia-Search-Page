import { useContext } from "react";
import Box from "@mui/material/Box";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { SearchContext } from "../contexts/SearchContext";
import { colorScheme } from "../../constants/colorScheme";
import ResponsiveFilterNav from "../filters/ResponsiveFilterNav";
export default function ResultHeader() {
  const { totalCount, filters, loading, error } = useContext(SearchContext);

  return (
    <Box
      sx={{
        height: "5rem",
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
      {/* Result tools */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Filter */}
        <ResponsiveFilterNav />
        {/* Share and Sort */}
        <Box>
          {/* Share */}
          <IconButton
            size="small"
            aria-label="copy"
            sx={{
              border: "1px solid #C8C8C8",
              color: colorScheme.light,
              mr: "0.5rem",
            }}
          >
            <ShareOutlinedIcon />
          </IconButton>
          {/* Sort */}
          <IconButton
            size="small"
            aria-label="sort"
            sx={{ border: "1px solid #C8C8C8", color: colorScheme.light }}
          >
            <SortIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
