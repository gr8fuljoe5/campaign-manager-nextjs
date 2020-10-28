import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useState } from "react";
import formatter from "../../utils/formatCurrency";
import CampaignButton from "../CampaignButton";
import CampaignDialog from "../CampaignDialog";
import DatePicker from "../DatePicker";
import Dropdown from "../Dropdown/index";
import TextField from "../TextField";

const useStyles = makeStyles(() =>
  createStyles({
    tableHeader: {
      "& th": {
        textAlign: "left",
      },
    },
    buttonWell: {
      textAlign: "right",
      margin: 10,
    },
  })
);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CampaignGrid = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const { data } = props;
  let updatedData = data;
  const objectToSend = [];

  updatedData.forEach((item) => {
    item.isSelected = false;
  });

  const updateDataRow = (idx, field, value) => {
    updatedData[idx][field] = value;
  };

  const submitPayload = (payload) => {
    const finalPayload = payload.filter((item) => item.isSelected === true);
    console.log("finalPayload", finalPayload);
    if (finalPayload.length > 0) {
      setOpenDialog(true);
    }
  };

  const renderTableHeader = () => {
    return (
      <TableHead className={classes.tableHeader}>
        <TableRow>
          <TableCell>Select</TableCell>
          <TableCell>Campaign Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Budget</TableCell>
          <TableCell>Start Date</TableCell>
          <TableCell>End Date</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const handleSelectChange = (idx) => {
    console.log("idx", idx);
  };

  const renderTableBody = () => {
    return (
      <TableBody>
        {updatedData.map((item, idx) => {
          return (
            <StyledTableRow key={`table-row-${idx}`}>
              <TableCell>
                <Checkbox
                  size="small"
                  inputProps={{ "aria-label": "select campaign" }}
                  onChange={(e) => {
                    updateDataRow(idx, "isSelected", e.target.checked);
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  disabled={item.isSelected}
                  defaultValue={item.campaign_name}
                  className={classes.input}
                  onChange={(e) => {
                    updateDataRow(idx, "campaign_name", e.target.value);
                  }}
                />
              </TableCell>
              <TableCell>
                <Dropdown value={item.status}>
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>Inactive</MenuItem>
                </Dropdown>
              </TableCell>
              <TableCell>
                <TextField
                  defaultValue={formatter.format(item.budget)}
                  onChange={(e) => {
                    updateDataRow(idx, "budget", e.target.value);
                  }}
                />
              </TableCell>
              <TableCell>
                <DatePicker selectedDate={item.start_date} />
              </TableCell>
              <TableCell>
                <DatePicker selectedDate={item.end_date} />
              </TableCell>
            </StyledTableRow>
          );
        })}
      </TableBody>
    );
  };
  return (
    <section>
      <Table className={classes.table} aria-label="Campaign Table" size="small">
        {renderTableHeader()}
        {renderTableBody()}
      </Table>
      <div className={classes.buttonWell}>
        <CampaignButton
          onClick={() => {
            // console.group("send data payload");
            // console.log(updatedData);
            // console.groupEnd();
            submitPayload(updatedData);
          }}
        >
          Save Campaign (Success)
        </CampaignButton>
      </div>
      <CampaignDialog openDialog={openDialog} />
    </section>
  );
};

export default CampaignGrid;
