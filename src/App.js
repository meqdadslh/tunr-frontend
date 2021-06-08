import React from "react";
import "./App.css";
import Playlist from "./component/Playlist"
import Form from "./component/Form";
import Nav from "./component/Nav"

function App() {

const url = "https://ams-329-tunr.herokuapp.com"

const [songs, setSongs] = React.useState([])

const emptySong = {
  title: "",
  artist: "",
  duration: ""
}

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
     <Nav/>
     <Playlist
      songs = {songs}/>
     <Form
      song={emptySong}
      handleSubmit={handleCreate}
      />
    </main>
  );
}

export default App;
