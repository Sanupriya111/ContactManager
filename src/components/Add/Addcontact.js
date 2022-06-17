import './addcontact.css'
import { useState } from "react";
function Addcontact(props){
    const [contacts,setContacts]=useState({
        name:'',
        number:''
    });
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        console.log("Add contact:",contacts);
        props.getData(contacts)
    }
   
    return(
        <div>
    <form onSubmit={handleSubmit} >
       <label><h4>Contact Name:</h4></label> <br/><input type="text" placeholder='Enter your name' onChange={(e)=>{
           setContacts({...contacts,name:e.target.value})
       }}  /><br/>
       <label><h4>Contact Number:</h4></label><br/> <input type="text" placeholder='Enter your contact number' onChange={(e)=>{
           setContacts({...contacts,number:e.target.value})
       }} />
      <br/>
      <button  type="submit" >Addcontact</button>
  
  </form>
</div>
  );
}
export default Addcontact