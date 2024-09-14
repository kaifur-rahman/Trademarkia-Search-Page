import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Mark from "./Mark";
import Details from "./Details";
import Status from "./Status";
import Box from "@mui/material/Box";
import Description from "./Description";

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
        <Details data={params} />
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
        <Status data={params} />
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
        <Description data={params} />
      </Box>
    ),
  },
];

const rows = [
  { id: "1", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "2", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "3", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "4", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "5", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "6", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "7", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "4", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "5", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "6", mark: "m1", details: "d1", status: "s1", description: "d1" },
  { id: "7", mark: "m1", details: "d1", status: "s1", description: "d1" },
];

export default function ListView() {
  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableSelectionOnClick
        getRowHeight={() => 140}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 }, // Default page size set to 10
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          "& .MuiDataGrid-row": {
            cursor: "pointer", // Make the entire row clickable
            "&:hover": {
              backgroundColor: "#f5f5f5", // Change background color on hover
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none", // Remove the focus outline from individual cells
            },
            "& .MuiDataGrid-cell": {
              pointerEvents: "none", // Disable clicking on individual cells
              borderRight: "none", // Remove right borders on cells
              border: "none",
              borderBottom: "none",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            borderRight: "none", // Remove right border of column headers
            fontWeight: 600,
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none", // Remove the column separators
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600, // Makes individual column header titles bold
          },
          "& .MuiDataGrid-root": {
            border: "none", // Remove outer table borders
          },
          "& .MuiDataGrid-viewport": {
            border: "none", // Remove the border around the table content
          },
          "& .MuiDataGrid-columnHeadersInner": {
            borderBottom: "none", // Remove any bottom border that could remain
          },
        }}
      />
    </Paper>
  );
}
