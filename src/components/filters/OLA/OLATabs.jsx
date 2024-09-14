import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CheckboxLabels from "./Checkbox";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OLATabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="filter tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#000000", // Change the active tab underline color to black
              color: "#000000",
            },
          }}
          sx={{
            "& .Mui-selected": {
              fontWeight: "bold", // Make the selected tab label bold
              color: "#000000!important",
            },
          }}
        >
          <Tab
            label="Owners"
            sx={{ fontSize: "0.75rem", textTransform: "none" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Law Firms"
            sx={{ fontSize: "0.75rem", textTransform: "none" }}
            {...a11yProps(1)}
          />
          <Tab
            label="Attorneys"
            sx={{ fontSize: "0.75rem", textTransform: "none" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      {/* tab content */}
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ height: "10rem", overflowY: "auto" }}>
          <CheckboxLabels />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ height: "10rem", overflowY: "auto" }}>
          <CheckboxLabels />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ height: "10rem", overflowY: "auto" }}>
          <CheckboxLabels />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
