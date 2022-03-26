import { Paper, Stack, Switch, Avatar, IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import {
  useFilters,
  useTable,
  setFilter,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { GlobalFilters } from "./GlobalFilters";
import image from "../../images/woman.jpg";

import { makeStyles } from "@mui/styles";

const label = { inputProps: { "aria-label": "Active" } };

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    paddingTop: "5em",
    paddingBottom: "3em",
    paddingLeft: "1em",
    paddingRight: "1em",
  },
  table: {
    minWidth: 600,
  },
  tableHead: {},
  headText: {
    fontWeight: 500,
  },
  search: {
    marginBottom: "1em",
  },
}));

export function DatabaseTable(props) {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const fetchProducts = async () => {
    const response = await axios
      .get("http://fakeapi.jsonparseronline.com/posts")
      .catch((err) => console.log(err));

    if (response) {
      const Users = response.data;
      setUsers(Users);
      console.log(users);
    }
  };

  const UsersData = useMemo(() => [...users], [users]);

  const UsersColumns = useMemo(
    () =>
      users[0]
        ? Object.keys(users[0])
            .filter((key) => key !== "content" && "title")
            .map((key) => {
              if (key === "imageUrl")
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => <img src={value} alt="user" />,
                  maxWidth: 70,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [users]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Action",
        Header: "Action",
        Cell: ({ row }) => (
          <Stack direction="row">
          <IconButton aria-label="delete" color="primary" >
            <ModeEditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>
          </Stack>
        ),
      },
      {
        id: "Status",
        Header: "Status",
        Cell: ({ row }) => <Switch {...label} defaultChecked color="success" />,
      },
      {
        id: "Avatar",
        Header: "Avatar",
        Cell: ({ row }) => <Avatar alt="Cindy Baker" src={image}></Avatar>,
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: UsersColumns,
      data: UsersData,
    },
    useFilters,
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = tableInstance;
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <div className={classes.search}>
        <GlobalFilters />
      </div>
      <Table sx={{ minWidth: 650 }} {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  scope="row"
                  align="right"
                  sx={{ backgroundColor: "#1c84e3" }}
                  variant="head"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell scope="row" align="right" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
