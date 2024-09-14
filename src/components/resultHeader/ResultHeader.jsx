import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { colorScheme } from "../../constants/colorScheme";

function ResultHeader() {
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
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontWeight: "700", color: "#4B5563" }}
        >
          About 30,000 Trademarks found for “*”
        </Typography>
      </Box>
      {/* result tools */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* filter */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderColor: "#C8C8C8",
            color: colorScheme.light,
            mr: "0.5rem",
          }}
          startIcon={<FilterAltIcon sx={{ color: colorScheme.light }} />}
        >
          Filter
        </Button>
        {/* share and sort  */}
        <Box>
          {/* share */}
          <IconButton
            size="small"
            aria-label="copy"
            sx={{ border: "1px solid #C8C8C8", color: "#000000", mr: "0.5rem" }}
          >
            <ShareIcon />
          </IconButton>
          {/* sort */}
          <IconButton
            size="small"
            aria-label="sort"
            sx={{ border: "1px solid #C8C8C8", color: "#000000" }}
          >
            <SortIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ResultHeader;
