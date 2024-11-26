import { useState } from "react";
import DonationTable from "./components/DonationTable";
import { basicColumns } from "./components/DonationTableColDefs";
import { GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Select,
  InputLabel,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  TextField,
  Container,
  Divider,
} from "@mui/material";

// const exampleTables = [
//   { id: 0, key: "donation-1", title: "Donation Table", columns: basicColumns },
//   {
//     id: 1,
//     key: "donation-2",
//     title: "Bingo Donation Table",
//     columns: basicColumns,
//   },
// ];

const enum TableTypes {
  Donation = "Donation",
}

interface DonationTable {
  id: number;
  key: string;
  title: string;
  columns: GridColDef[];
}

export default function DonationTableSelector() {
  const [tables, setTables] = useState<DonationTable[]>([]);
  const [tableTitle, setTableTitle] = useState("");
  const [tableId, setTableId] = useState(0);
  const [tableType, setTableType] = useState("");
  console.log(tables);

  function AddTable() {
    const newTable: DonationTable = {
      id: tableId,
      key: `${tableType}-${tableId}`,
      title: `${tableTitle}`,
      columns: basicColumns,
    };

    const tableCopy = [];
    tables.map((table) => tableCopy.push(table));
    tableCopy.push(newTable);
    console.log(tableCopy.toString());

    setTables(tableCopy);
    setTableId(tableId + 1);
  }

  const handleTableTypeChange = (event: SelectChangeEvent) => {
    console.log(event);
    setTableType(event.target.value);
    // AddTable(event.target.value);
  };

  function handleTableAdd() {
    AddTable();
    clearTableInfo();
  }

  function clearTableInfo() {
    setTableTitle("");
    setTableType("");
  }

  return (
    <div>
      <Container
        maxWidth="md"
        style={{ background: "white", borderRadius: "4" }}
      >
        <Container
          style={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
        >
          <TextField
            id="donation-table-title-field"
            label="Donation Table Title"
            variant="standard"
            onChange={(event) => setTableTitle(event.target.value)}
            value={tableTitle}
            style={{ width: "50%", paddingRight: "10px" }}
            size="small"
          />
          <FormControl style={{ width: "50%" }} size="small">
            <InputLabel id="donation-table-select-label">
              Select Donation Table Type
            </InputLabel>
            <Select
              labelId="donation-table-select-label"
              id="donation-table-selector"
              value={tableType}
              label="Select Donation Table Type"
              onChange={(event) => handleTableTypeChange(event)}
            >
              <MenuItem value={TableTypes.Donation}>
                {TableTypes.Donation}
              </MenuItem>
            </Select>
          </FormControl>
        </Container>
        <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Button variant="contained" onClick={() => handleTableAdd()}>
            Add Table
          </Button>
        </Container>

        <Container style={{ paddingBottom: "10px" }}>
          {tables.map(({ key, title, columns }) => {
            return (
              <>
                <Divider
                  key={`divider-${key}`}
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    color: "black",
                  }}
                />
                <DonationTable key={key} title={title} columns={columns} />
              </>
            );
          })}
        </Container>
      </Container>
    </div>
  );
}
