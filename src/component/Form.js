import React from "react";

const Form = (props) => {
    return (
        <div className="wrapper">
        <h1><b>ADD A NEW SONG</b></h1>
        <form>
          <section>
            <label htmlFor="title">TITLE</label>
            <input 
                type="text"
                id="title"
            />
            <label htmlFor="artist">ARTIST</label>
            <input 
                type="text"
                id="artist"
            />

            <label htmlFor="duration">DURATION</label>
            <input 
                type="string"
                id="duration"
            />
          </section>
          <button type ="submit"><b>ADD NEW SONG</b></button>

         </form>
      </div>
    )
}
export default Form;