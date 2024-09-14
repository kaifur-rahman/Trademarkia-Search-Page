import Box from "@mui/material/Box";
import imageUnavailable from "../../../assets/Image-Unavailable.png";

function Mark({ value }) {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "9.8rem",
        height: "6.5rem",
        borderRadius: "10px",
      }}
    >
      <img
        style={{ width: "3.3rem", height: "3.8rem" }}
        src={imageUnavailable}
      ></img>
    </Box>
  );
}

export default Mark;
