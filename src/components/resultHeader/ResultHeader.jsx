import Box from "@mui/material/Box";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ResponsiveFilterNav from "../filters/ResponsiveFilterNav";

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
        <ResponsiveFilterNav />
        {/* share and sort  */}
        <Box>
          {/* share */}
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
          {/* sort */}
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

export default ResultHeader;
