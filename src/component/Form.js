import React from "react";

const Form = (props) => {

 const [formData, setFormData] = React.useState(props.song);

 //FUNCTIONS
 const handleSubmit = (event) => {
   event.preventDefault(); // Prevent Form from Refreshing
   props.handleSubmit(formData); // Submit to Parents desired function
 };

 const handleChange = (event) => {
   setFormData({ ...formData, [event.target.id]: event.target.value });
 };

    return (
        <div className="wrapper">
            <hr></hr>
        <h1>ADD A NEW SONG</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">TITLE</label>
            <input 
                type="text"
                id="title"
                placeholder="title"
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor="artist">ARTIST</label>
            <input 
                type="text"
                id="artist"
                placeholder="artist"
                value={formData.artist}
                onChange={handleChange}
            />

            <label htmlFor="duration">DURATION</label>
            <input 
                type="text"
                id="duration"
                placeholder="duration"
                value={formData.duration}
                onChange={handleChange}
            />
          </section>
          <button type ="submit"><b>ADD NEW SONG</b></button>

         </form>
      </div>
    )
}
export default Form;
