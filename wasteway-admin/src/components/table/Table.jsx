import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Gaborone",
      img: "https://firebasestorage.googleapis.com/v0/b/safe-space-dn.appspot.com/o/Gaborone.jpg?alt=media&token=1bec5d30-2012-46b1-ac7b-bf3a7d4af087",
      customer: "John Smith",
      date: "10 May",
      amount: 785,
      method: "Cash on Delivery",
      status: "Collected",
    },
    {
      id: 2235235,
      product: "Gaborone",
      img: "https://firebasestorage.googleapis.com/v0/b/safe-space-dn.appspot.com/o/Gaborone.jpg?alt=media&token=1bec5d30-2012-46b1-ac7b-bf3a7d4af087",
      customer: "Michael Doe",
      date: "24 July",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Mahalapye",
      img: "https://firebasestorage.googleapis.com/v0/b/safe-space-dn.appspot.com/o/mahalapye.jpg?alt=media&token=895f5acf-2045-479c-a832-aa6b5fa36d5f",
      customer: "John Smith",
      date: "18 July",
      amount: 35,
      method: "Cash on Delivery",
      status: "Collected",
    },
    {
      id: 2357741,
      product: "Francistown",
      img: "https://firebasestorage.googleapis.com/v0/b/safe-space-dn.appspot.com/o/francistown.jpg?alt=media&token=30588325-5ebb-45ab-9b59-9d6ede9388fc",
      customer: "Jane Smith",
      date: "23 July",
      amount: 920,
      method: "Online",
      status: "Collected",
    },
    {
      id: 2342355,
      product: "Gaborone",
      img: "https://firebasestorage.googleapis.com/v0/b/safe-space-dn.appspot.com/o/Gaborone.jpg?alt=media&token=1bec5d30-2012-46b1-ac7b-bf3a7d4af087",
      customer: "Harold Carol",
      date: "26 July",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Location</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
             
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
