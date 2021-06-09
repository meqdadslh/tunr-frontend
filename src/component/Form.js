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
        <h1><b>ADD A NEW SONG</b></h1>
        <form onSubmit={handleSubmit}>
          <section>
            <div className="title"><label htmlFor="title">TITLE</label><br/>
            <input 
                type="text"
                id="title"
                placeholder="title"
                value={formData.title}
                onChange={handleChange}
            /></div>
            <div className="artist"><label htmlFor="artist">ARTIST</label><br/>
            <input 
                type="text"
                id="artist"
                placeholder="artist"
                value={formData.artist}
                onChange={handleChange}
            /></div>

            <div className="duration"><label htmlFor="duration">DURATION</label><br/>
            <input 
                type="string"
                id="duration"
                placeholder="duration"
                value={formData.duration}
                onChange={handleChange}
            /></div>
          </section>
          <button type ="submit"><b>ADD NEW SONG</b></button>

         </form>
      </div>
    )
}
export default Form;