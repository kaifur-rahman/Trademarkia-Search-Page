import { useContext } from "react";
import Box from "@mui/material/Box";
import SortIcon from "@mui/icons-material/Sort";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { colorScheme } from "../../constants/colorScheme";
import { SearchContext } from "../contexts/SearchContext";
import ResponsiveFilterNav from "../filters/ResponsiveFilterNav";
import CircularProgress from "@mui/material/CircularProgress";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export default function ResultHeader() {
  const { totalCount, filters, loading, error } = useContext(SearchContext);
  const handleShare = () => {
    const shareData = {
      title: "Trademarkia Search Results",
      text: `Check out the search results for "${filters.input_query}" on Trademarkia`,
      url: window.location.href, // Current URL with search query parameters
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => {})
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert("Sharing is not supported on your device or browser.");
    }
  };

  return (
    <Box
      sx={{
        height: { xs: "4.5rem", md: "3rem" },
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
        ) : totalCount == 0 ? (
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
            onClick={handleShare}
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
