import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {

const url = ""

const [songs, setSongs] = React.useState([])

const emptySong = {
  title: "",
  artist: "",
  duration: ""
}

const [selectedSong, setSelectedSong] = React.useState(emptySong)

const getSongs = () => {
fetch(url + "/tunes/")
.then((response) => response.json())
.then((data) => {
  setSongs(data)
})
}

React.useEffect(() => {
  getSongs()
}, [])

const handleCreate = (newSong) => {
fetch(url + "/tunes/", {
  method: "POST",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify(newSong)
})
.then(() => getSongs())
}

const deleteSong = (song) => {
fetch(url + "/tunes/" + song._id, {
  method: "delete"
})
.then(() => {
  getSongs()
})
}
  return (
      <main>
     <Heder/>
     <Form
      label="create"
      song={emptySong}
      handleSubmit={handleCreate}
      />
    </main>
  );
}

export default App;
