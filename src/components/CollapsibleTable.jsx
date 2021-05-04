import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useFeed} from './FeedStore'
import './CollapsibleTable.css'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell width="5%">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <p>{row.text}</p>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export const CollapsibleTable = (props) => {
  const {items, tableName} = props
  const feed = useFeed()
  return (
      <Table aria-label="collapsible table" className='feed'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{tableName||"News Feed"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?items:feed.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
  );
}
