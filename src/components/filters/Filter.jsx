import Box from "@mui/material/Box";
import Status from "./Status";
import OLA from "./OLA/OLA";
import Display from "./Display";

function Filter() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Status />
      <OLA />
      <Display />
    </Box>
  );
}

export default Filter;
