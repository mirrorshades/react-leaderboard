import React, { useState } from "react";
import { ValidatorForm } from "react-form-validator-core";
import Modal from "react-modal";

import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";
import Leaderboard from "./components/Leaderboard/Leaderboard";

import ContextConfig from "./context-config";
import data from "./tempdata";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [wins, setWins] = useState("");
  const [score, setScore] = useState("");
  const [currentId, setCurrentId] = useState(data.length + 1);
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [leaderboard, setLeaderboard] = useState(
    data.sort((a, b) => b.wins - a.wins || a.lastName.localeCompare(b.lastName))
  );

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  const handleAdd = e => {
    const newId = currentId + 1;
    setCurrentId(newId);
    const player = { firstName, lastName, wins, score, id: newId };
    let newLeaderboard;

    // update if editting
    if (editId !== null) {
      const index = leaderboard.findIndex(item => item.id === editId);
      newLeaderboard = [
        ...leaderboard.slice(0, index),
        Object.assign({}, player),
        ...leaderboard.slice(index + 1)
      ];
      // insert new player
    } else {
      newLeaderboard = [...leaderboard, player];
    }

    // reset form and sort leaderboard
    setFirstName("");
    setLastName("");
    setWins("");
    setScore("");
    setEditId(null);
    setLeaderboard(
      newLeaderboard.sort(
        (a, b) => b.wins - a.wins || a.lastName.localeCompare(b.lastName)
      )
    );
    handleHideModal();
  };

  // sets up row for edit
  const handleEdit = id => {
    const player = leaderboard.find(player => {
      return player.id === id;
    });

    setFirstName(player.firstName);
    setLastName(player.lastName);
    setWins(player.wins);
    setScore(player.score);
    setEditId(player.id);
    handleShowModal();
  };

  const handleDelete = id => {
    const newLeadboard = leaderboard.filter(player => {
      return player.id !== id;
    });

    // update state from filter
    setLeaderboard(newLeadboard);
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setScore("");
    setWins("");
    setEditId(null);
    handleHideModal();
  };

  return (
    <div className="App">
      <ContextConfig.Provider value={{ leaderboard, handleEdit, handleDelete }}>
        <Leaderboard handleShowModal={handleShowModal} />

        <Modal isOpen={showModal} style={customStyles}>
          <ValidatorForm onSubmit={handleAdd} className="enterPlayer">
            <InputField
              name="firstName"
              placeholder="First Name"
              type="text"
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            />
            <InputField
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
            <InputField
              name="wins"
              placeholder="Wins"
              type="text"
              onChange={e => setWins(e.target.value)}
              value={wins}
              validators={["required"]}
              errorMessages={["required"]}
            />
            <InputField
              name="score"
              placeholder="Score"
              type="text"
              onChange={e => setScore(e.target.value)}
              value={score}
            />

            <Button style={{ margin: "10px 0 0 5px" }} onClick={handleAdd}>
              SAVE
            </Button>

            <Button style={{ margin: "0 0 0 5px" }} onClick={handleCancel}>
              CANCEL
            </Button>
          </ValidatorForm>
        </Modal>
      </ContextConfig.Provider>
    </div>
  );
};

export default App;
