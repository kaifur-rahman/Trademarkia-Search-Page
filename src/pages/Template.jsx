import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Navbar from "../components/navbar/Navbar";
import ResultHeader from "../components/resultHeader/ResultHeader";
import Trademarks from "../components/trademarks/Trademarks";
function Template() {
  return (
    <Box>
      <Navbar />
      <Container
        sx={{ height: "100%", width: "100%", mt: "8rem", mb: "0.8rem" }}
      >
        <ResultHeader />
      </Container>
      <Divider />
      {/* main content */}
      <Container sx={{ mt: "1rem" }}>
        <Trademarks />
      </Container>
    </Box>
  );
}

export default Template;
