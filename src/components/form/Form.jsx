import {useState} from "react"

const Form = ()=> {
    const [formData, setFormData] = useState();
     
    const handleChange = (event)=> {
       setFormData( {
           ...formData,
           [event.target.name]:event.target.value,
            }
         )
     }
   return (
       <form>
       <div className="form-group">
       <input type="text" className="form-control" placeholder="vardas" onChange={handleChange} name="name"/>
       </div>
       <div className="form-group">
       <input type="text" className="form-control" placeholder="El.pastas" onChange={handleChange} name="email"/>
       </div>
       <div className="form-group">
       <input type="text" className="form-control" placeholder="Akiu spalva" onChange={handleChange} name="color"/>
       </div>
       <div className="form-group">
         <button type="submit">siusti</button>
       </div>
       </form>
   )



}

export default Form