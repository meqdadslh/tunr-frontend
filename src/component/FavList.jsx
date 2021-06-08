import React from "react"

const FavList = ({ favSongs }) => {
  const loading = () => {
    return <h2>Pulling favorites...</h2>
  }

  const loaded = () => {
    return (
      <div className="favs">
        {favSongs.map((song, index) => (
          <div className="song" key={index}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.duration}</p>
          </div>
        ))}
      </div>
    )
  }

  return favSongs ? loaded() : loading()
}

export default FavList
