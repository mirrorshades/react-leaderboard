import React from "react";

const leadboardContext = React.createContext({
  leaderboard: [],
  setLeaderboard: () => {},
  handleEdit: () => {},
  handleDelete: () => {}
});

export default leadboardContext;
