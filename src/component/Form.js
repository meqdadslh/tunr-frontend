import React from "react";

const Form = (props) => {

 const [formData, setFormData] = React.useState(props.song);

 //FUNCTIONS
 const handleSubmit = (event) => {
   event.preventDefault(); // Prevent Form from Refreshing
   props.handleSubmit(formData); // Submit to Parents desired function
 };

 const handleChange = (event) => {
   setFormData({ ...formData, [event.target.name]: event.target.value });
 };

    return (
        <div className="wrapper">
        <h1><b>ADD A NEW SONG</b></h1>
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
                type="string"
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