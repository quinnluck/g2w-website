import { GridColDef } from "@mui/x-data-grid";


export const basicColumns: GridColDef[] = [
    { field: 'username', headerName: 'Username', width: 175, editable: true },
    { field: 'donation_amount', headerName: 'Donation Amount', width: 150, editable: true },
    { field: 'donation_fulfilled', headerName: 'Donation Fulfilled', width: 150, editable: true, type: 'boolean' },
    { field: 'paid_to', headerName: 'Paid to', width: 150, editable: true }
];
