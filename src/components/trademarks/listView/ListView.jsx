import { useContext } from "react";
import Mark from "./Mark";
import Status from "./Status";
import Details from "./Details";
import Box from "@mui/material/Box";
import Description from "./Description";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { SearchContext } from "../../contexts/SearchContext";

const columns = [
  {
    field: "mark",
    flex: 1,
    headerName: "Mark",
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Mark value={params.value} />
      </Box>
    ),
  },
  {
    field: "details",
    flex: 1,
    headerName: "Details",
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Details data={params.row.details} />
      </Box>
    ),
  },
  {
    field: "status",
    flex: 1,
    headerName: "Status",
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Status data={params.value} />
      </Box>
    ),
  },
  {
    field: "description",
    flex: 1,
    headerName: "Class/Description",
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Description data={params.value} />
      </Box>
    ),
  },
];

export default function ListView() {
  const { data, loading, error } = useContext(SearchContext);

  // Handle the case where the data is still loading
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>{error}</p>
      </Box>
    );
  }

  // Map the API data to the rows for the DataGrid
  const rows = data.map((item, index) => ({
    id: index + 1, // Assign an id to each row
    mark: item._source.mark_identification || "N/A", // Mark name
    details: {
      mark_name: item._source.mark_identification,
      owner_name: item._source.current_owner,
      registration_number: item._source.registration_number,
      registration_date: new Date(
        item._source.registration_date * 1000
      ).toLocaleDateString(), // Convert timestamp to date
    }, // Pass relevant details for the Details component
    status: {
      status: item._source.status_type || "N/A", // Status of the trademark
      registration_date: new Date(
        item._source.registration_date * 1000
      ).toLocaleDateString(), // Registration date
      renewal_date: new Date(
        item._source.renewal_date * 1000
      ).toLocaleDateString(), // Renewal date
    },
    description: {
      description:
        item._source.mark_description_description?.join(", ") || "N/A", // Description array
      classCodes: item._source.class_codes || [], // Class codes array
    },
  }));

  return (
    <Paper sx={{ width: "100%", boxShadow: "none" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        hideFooter
        disableSelectionOnClick
        getRowHeight={() => 140}
        sx={{
          border: "none!important",
          "& .MuiDataGrid-row": {
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-cell": {
              pointerEvents: "none",
              borderRight: "none",
              border: "none",
              borderBottom: "none",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            borderRight: "none",
            fontWeight: 600,
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600,
          },
          "& .MuiDataGrid-root": {
            border: "none!important",
          },
          "& .MuiDataGrid-viewport": {
            border: "none!important",
          },
          "& .MuiDataGrid-columnHeadersInner": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-main": {
            border: "none!important",
          },
          mb: "2rem",
        }}
      />
    </Paper>
  );
}
