import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { colorScheme } from "../../constants/colorScheme";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Status() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "10rem",
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
          <Chip
            label="All"
            variant="outlined"
            onClick={handleClick}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.75rem",
            }}
          />
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
            variant="outlined"
            onClick={handleClick}
            sx={{
              borderColor: colorScheme.light,
              fontWeight: "600",
              borderRadius: "0.75rem",
              fontSize: "0.75rem",
            }}
          />
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
            variant="outlined"
            onClick={handleClick}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.75rem",
            }}
          />
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
            variant="outlined"
            onClick={handleClick}
            sx={{
              borderColor: colorScheme.light,
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.75rem",
            }}
          />
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
            variant="outlined"
            onClick={handleClick}
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
