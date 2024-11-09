import { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import {
  Box,
  Stack,
  Button 
} from '@mui/material';

interface DonationTableProps {
  title: string,
  columns: GridColDef[]
}

/*
I want to make default Donation Tables to be used for different events (clan bingo etc)
*/
export default function DonationTable({ title, columns }: DonationTableProps) {
  const apiRef = useGridApiRef()  
  const [rows, setRows] = useState<GridRowsProp>([])
  const [idCounter, setIdCounter] = useState(0)

  // const [idCounter, setIdCounter] = useState(0)

  // useEffect(() => {
  //   /* need to grab data from DB */
  //  SetIdCounter to length
  // })

  const  handleAddRow = () => {
    const newCount = idCounter + 1
    apiRef.current?.updateRows([{ id: newCount, username: "", donation_amount: "" }])
    setIdCounter(newCount)
    // add to DB as well
  }


  return (
    <Box sx={{ width: '100%' }}>
      <div>{title}</div>
      <Stack direction="row" spacing={1}>
        <Button size="small" onClick={handleAddRow}>
          Add Row
        </Button>
      </Stack>
      <Box sx={{ width: '100%', mt: 1 }}>
        <DataGrid apiRef={apiRef} rows={rows} columns={columns} editMode="row" />
      </Box>
    </Box>
  )
}
