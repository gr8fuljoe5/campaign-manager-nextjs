import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CampaignButton from "../Button";
import NumberFormatCustom from "../CurrencyInput/index";
import DatePicker from "../DatePicker";
import CampaignDialog from "../Dialog";
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
    height: "10px",
    fontSize: 12,
    padding: 0,
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CampaignGrid = (props) => {
  const [openDialog, setOpenDialog] = useState();
  const [dialogResponse, setDialogResponse] = useState("");
  const classes = useStyles();
  const { data, onSubmit } = props;
  let updatedData = data;

  // append flag for each item for later use
  updatedData.forEach((item) => {
    item.isSelected = false;
  });

  const updateDataRow = (idx, field, value) => {
    updatedData[idx][field] = value;
  };

  const submitPayload = async (payload) => {
    const finalPayload = payload.filter((item) => item.isSelected === true);
    const response = await onSubmit(finalPayload);
    console.group("Payload to submit:");
    console.log(finalPayload);
    console.log(response);
    console.groupEnd();
    setOpenDialog(true);
    setDialogResponse(response);
  };

  const closeDialog = () => {
    setOpenDialog(false);
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
                  size="small"
                  defaultValue={item.campaign_name}
                  className={classes.input}
                  onChange={(e) => {
                    updateDataRow(idx, "campaign_name", e.target.value);
                  }}
                />
              </TableCell>
              <TableCell>
                <Dropdown
                  size="small"
                  value={item.status}
                  handleChange={(e) => {
                    updateDataRow(idx, "status", e.target.value);
                  }}
                >
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>Inactive</MenuItem>
                </Dropdown>
              </TableCell>
              <TableCell>
                <TextField
                  size="small"
                  defaultValue={item.budget}
                  onChange={(e) => {
                    updateDataRow(idx, "budget", parseInt(e.target.value));
                  }}
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </TableCell>
              <TableCell>
                <DatePicker
                  size="small"
                  selectedDate={item.start_date}
                  onAccept={(moment) => {
                    updateDataRow(
                      idx,
                      "start_date",
                      moment.format("YYYY-MM-DD")
                    );
                  }}
                />
              </TableCell>
              <TableCell>
                <DatePicker
                  size="small"
                  selectedDate={item.end_date}
                  onAccept={(moment) => {
                    updateDataRow(idx, "end_date", moment.format("YYYY-MM-DD"));
                  }}
                />
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
            submitPayload(updatedData);
          }}
        >
          Save Campaign
        </CampaignButton>
      </div>
      <CampaignDialog
        openDialog={openDialog}
        response={dialogResponse}
        closeDialog={closeDialog}
      />
    </section>
  );
};

CampaignGrid.propTypes = {
  data: PropTypes.object,
};

export default CampaignGrid;
