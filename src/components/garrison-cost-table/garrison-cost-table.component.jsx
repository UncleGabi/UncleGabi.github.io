import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./garrison-cost-table.styles.scss";

// const useStyles = makeStyles({
//   header: {
//     backgroundColor: "#CCC",
//   },
// });

export default function BasicTable({ siege }) {
  //   const classes = useStyles();

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#000" }}>
            <TableRow>
              <TableCell style={{ color: "white" }} align="center">
                Garrison
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Gold
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Wood
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Ore
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Crystal
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Gem
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Mercury
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Sulfur
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={siege.id}>
              <TableCell align="center">Basic</TableCell>
              <TableCell align="center">{siege.resources.basic.gold}</TableCell>
              <TableCell align="center">{siege.resources.basic.wood}</TableCell>
              <TableCell align="center">{siege.resources.basic.ore}</TableCell>
              <TableCell align="center">
                {siege.resources.basic.crystal}
              </TableCell>
              <TableCell align="center">{siege.resources.basic.gem}</TableCell>
              <TableCell align="center">
                {siege.resources.basic.mercury}
              </TableCell>
              <TableCell align="center">
                {siege.resources.basic.sulfur}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Upgrades</TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.gold}
              </TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.wood}
              </TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.ore}
              </TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.crystal}
              </TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.gem}
              </TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.mercury}
              </TableCell>
              <TableCell align="center">
                {siege.resources.upgrades.sulfur}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">All</TableCell>
              <TableCell align="center">{siege.resources.all.gold}</TableCell>
              <TableCell align="center">{siege.resources.all.wood}</TableCell>
              <TableCell align="center">{siege.resources.all.ore}</TableCell>
              <TableCell align="center">
                {siege.resources.all.crystal}
              </TableCell>
              <TableCell align="center">{siege.resources.all.gem}</TableCell>
              <TableCell align="center">
                {siege.resources.all.mercury}
              </TableCell>
              <TableCell align="center">{siege.resources.all.sulfur}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Troops</TableCell>
              <TableCell align="center">
                {siege.resources.troops.gold}
              </TableCell>
              <TableCell align="center">
                {siege.resources.troops.wood}
              </TableCell>
              <TableCell align="center">{siege.resources.troops.ore}</TableCell>
              <TableCell align="center">
                {siege.resources.troops.crystal}
              </TableCell>
              <TableCell align="center">{siege.resources.troops.gem}</TableCell>
              <TableCell align="center">
                {siege.resources.troops.mercury}
              </TableCell>
              <TableCell align="center">
                {siege.resources.troops.sulfur}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
