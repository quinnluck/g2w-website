import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";


export default function DonationTable() {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <div>
        <div>Donation Table</div>
        <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
