import React, { useContext } from "react";

import Button from "../Button/Button";
import {
  Table,
  TableHead,
  TR,
  TH,
  TD,
  TableBody,
  LeaderboardWrapper,
  Place,
  TitleRow
} from "./StyledLeaderboard";
import { FaTimes, FaEdit } from "react-icons/fa";

import ContextConfig from "../../context-config";

const Leaderboard = ({ handleShowModal }) => {
  const leaderContext = useContext(ContextConfig);

  return (
    <LeaderboardWrapper>
      <TitleRow>
        <h2>Football Leaderboard</h2>
        <Button onClick={() => handleShowModal()}>Add Athlete</Button>
      </TitleRow>
      <Table>
        <TableHead>
          <TR>
            <TH style={{ textAlign: "center" }}>Place</TH>
            <TH>Athlete</TH>
            <TH>Wins</TH>
            <TH>Points</TH>
            <TH style={{ textAlign: "center" }} />
          </TR>
        </TableHead>
        <TableBody>
          {leaderContext.leaderboard.map((item, index) => (
            <TR key={item.id}>
              <TD style={{ textAlign: "center" }}>
                <Place place={index + 1}>{index + 1}</Place>
              </TD>
              <TD>
                {item.firstName} {item.lastName}
              </TD>
              <TD>{item.wins}</TD>
              <TD>
                <strong>{item.score}</strong>
              </TD>
              <TD style={{ textAlign: "center" }}>
                <FaEdit onClick={() => leaderContext.handleEdit(item.id)} />
                <FaTimes onClick={() => leaderContext.handleDelete(item.id)} />
              </TD>
            </TR>
          ))}
        </TableBody>
      </Table>
    </LeaderboardWrapper>
  );
};

export default Leaderboard;
