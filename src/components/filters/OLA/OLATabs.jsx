import { useContext, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CheckboxLabels from "./Checkbox";
import { SearchContext } from "../../contexts/SearchContext";
import CircularProgress from "@mui/material/CircularProgress";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function OLATabs() {
  const [value, setValue] = useState(0);
  const { loading, ownerList, lawFirmList, attorneyList } =
    useContext(SearchContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="filter tabs"
          TabIndicatorProps={{
            style: { backgroundColor: "#000", color: "#000" },
          }}
          sx={{
            "& .Mui-selected": { fontWeight: "bold", color: "#000!important" },
          }}
        >
          <Tab label="Owners" sx={{ fontSize: "0.75rem" }} {...a11yProps(0)} />
          <Tab
            label="Law Firms"
            sx={{ fontSize: "0.75rem" }}
            {...a11yProps(1)}
          />
          <Tab
            label="Attorneys"
            sx={{ fontSize: "0.75rem" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      {/* Owners Tab */}
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ height: "10rem", overflowY: "auto" }}>
          {loading ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <CheckboxLabels filterKey="owners" data={ownerList} />
          )}
        </Box>
      </CustomTabPanel>

      {/* Law Firms Tab */}
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ height: "10rem", overflowY: "auto" }}>
          {loading ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <CheckboxLabels filterKey="law_firms" data={lawFirmList} />
          )}
        </Box>
      </CustomTabPanel>

      {/* Attorneys Tab */}
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ height: "10rem", overflowY: "auto" }}>
          {loading ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <CheckboxLabels filterKey="attorneys" data={attorneyList} />
          )}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
