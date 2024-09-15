import { useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { colorScheme } from "../../constants/colorScheme";
import { SearchContext } from "../contexts/SearchContext";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Status() {
  const { filters, updateFilters } = useContext(SearchContext);

  const handleClick = (status) => {
    if (status === "all") {
      updateFilters("status", []);
      
    } else {
      updateFilters("status", [status]);
    }
  };

  const isActive = (status) => {
    if (status === "all") {
      return filters.status.length === 0;
    }
    return filters.status.includes(status);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "auto",
        mt: { xs: "2rem", md: "4rem" },
        width: { xs: "90%", md: "100%" },
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.06)", // Multiple drop shadows
        borderRadius: "8px",
        p: "1rem",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: "1rem" }}
      >
        Status
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: "1rem",
        }}
      >
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          {/* All Status Chip */}
          <Chip
            label="All"
            variant={isActive("all") ? "filled" : "outlined"}
            onClick={() => handleClick("all")}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.75rem",
            }}
          />
          {/* Registered Status Chip */}
          <Chip
            icon={
              <FiberManualRecordIcon
                sx={{
                  fontSize: "0.8rem",
                  color: `${colorScheme.green}!important`,
                }}
              />
            }
            label="Registered"
            variant={isActive("registered") ? "filled" : "outlined"}
            onClick={() => handleClick("registered")}
            sx={{
              borderColor: colorScheme.light,
              fontWeight: "600",
              borderRadius: "0.75rem",
              fontSize: "0.75rem",
            }}
          />
          {/* Pending Status Chip */}
          <Chip
            label="Pending"
            icon={
              <FiberManualRecordIcon
                sx={{
                  fontSize: "0.8rem",
                  color: `${colorScheme.orangeDark}!important`,
                }}
              />
            }
            variant={isActive("pending") ? "filled" : "outlined"}
            onClick={() => handleClick("pending")}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.75rem",
            }}
          />
          {/* Abandoned Status Chip */}
          <Chip
            label="Abandoned"
            icon={
              <FiberManualRecordIcon
                sx={{
                  fontSize: "0.8rem",
                  color: `${colorScheme.red}!important`,
                }}
              />
            }
            variant={isActive("abandoned") ? "filled" : "outlined"}
            onClick={() => handleClick("abandoned")}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.75rem",
            }}
          />
          {/* Others Status Chip */}
          <Chip
            label="Others"
            icon={
              <FiberManualRecordIcon
                sx={{
                  fontSize: "0.8rem",
                  color: `${colorScheme.blue}!important`,
                }}
              />
            }
            variant={isActive("others") ? "filled" : "outlined"}
            onClick={() => handleClick("others")}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Status;
