import { ChangeEvent, useRef, useState } from "react"
import DonationTable from './components/DonationTable';
import { basicColumns } from "./components/DonationTableColDefs"
import { GridColDef } from "@mui/x-data-grid";
import {
    Grid2 as Grid,
    Typography,
    Demo,
    List,
    ListItem,
    IconButton,
    DeleteIcon,
    ListItemAvatar,
    Avatar,
    FolderIcon,
    ListItemText,
    Button,
    Select,
    InputLabel,
    SelectChangeEvent,
    MenuItem,
    FormControl,
    TextField,
} from "@mui/material"
import { debounce } from "../Utilities/debounce";


const exampleTables = [
    {id: 0, key: "donation-1", title: "Donation Table", columns: basicColumns},
    {id: 1, key: "donation-2", title: "Bingo Donation Table", columns: basicColumns }
]

const enum TableTypes {
    Donation = "Donation"
}

interface DonationTable {
    id: number,
    key: string,
    title: string,
    columns: GridColDef[]
}

export default function DonationTableSelector() {
    const [tables, setTables] = useState<DonationTable[]>([])
    const [tableTitle, setTableTitle] = useState('')
    const [tableId, setTableId] = useState(0)
    const [tableType, setTableType] = useState('')
    console.log(tables)

    function AddTable(tableType: string) {
        const newTable: DonationTable = {id: tableId, key:`${tableType}-${tableId}`, title: `${tableTitle}`, columns: basicColumns}
        
        const tableCopy = []
        tables.map((table) => tableCopy.push(table))
        tableCopy.push(newTable)
        console.log(tableCopy.toString())
        
        setTables(tableCopy)
        setTableId(tableId + 1)
    }

    const handleTableTypeChange = (event: SelectChangeEvent) => {
        console.log(event)
        setTableType(event.target.value)
        AddTable(event.target.value)
    }

    return(
        <div>
            <div>
                <TextField
                    id="donation-table-title-field"
                    label="Donation Table Title"
                    variant="standard"
                    onChange={(event) => setTableTitle(event.target.value)}
                    value={tableTitle}
                />
            <FormControl fullWidth>
                <InputLabel id="donation-table-select-label">Select Donation Table Type</InputLabel>
                <Select
                    labelId="donation-table-select-label"
                    id="donation-table-selector"
                    value={tableType}
                    label="Select Donation Table Type"
                    onChange={(event) => handleTableTypeChange(event)}
                >
                    <MenuItem value={TableTypes.Donation}>{TableTypes.Donation}</MenuItem>
                </Select>
            </FormControl>
            </div>
            {tables.map(({ key, title, columns }) => {
                return <DonationTable key={key} title={title} columns={columns}/>
            })}
        </div>
    )
}