import DonationTable from "./components/DonationTable"
import { basicColumns } from "./components/DonationTableColDefs"
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
} from "@mui/material"


export default function DonationTableSelector() {
    const tables = [
        {id: 0, key: "donation-1", title: "Donation Table", columns: basicColumns},
        {id: 1, key: "donation-2", title: "Bingo Donation Table", columns: basicColumns }
    ]

    return(
        <div>
            {tables.map(({ key, title, columns }) => {
                return <DonationTable key={key} title={title} columns={columns}/>
            })}
        </div>
    )
}