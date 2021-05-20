import React from "react"

const Playlist = (props) => {
    const {songs} = props
    
    const loaded = () => (
        <div>
          {songs.map((song) => (
            <div key={song._id}>
            <h2>{song.title}</h2>
            <h2>{song.artist}</h2>
            <h2>{song.duration}</h2>
            </div>
          ))}
        </div>
      )
    
      const loading = () => <h1>Loading</h1>
      
      return (
        <h1>Totally Awesome Playlist!</h1>, 
        songs.length > 0 ? loaded() : loading ()

      )
}

export default Playlist