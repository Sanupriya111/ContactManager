import './viewcontact.css'
import {useEffect} from "react"
import {useState} from 'react'
function Viewcontact(props)
{
    const deleteitem=(item)=>{
        console.log("removeItem"+item);
        props.remove(item)
    }
   
    const [contacts,setContacts]=useState([])
    const {name,number}=props.list;
    useEffect(()=>{
        const localdata=localStorage.getItem("contactslocal")
        setContacts(props.list)
        console.log("props.list :",props.list)
        console.log("contact list :",contacts)
    }
    )
      const mapdata=contacts.map((list,i)=>{
    //      console.log("maped data  "+list.name);
        
    return(
<div>
    <form action="">
    <img src='./assets/profile.webp' />   <label><h4>{list.name}</h4></label> <br/>
    <label><h4>{list.number}</h4></label>
    <button type="button" class="btn-close" aria-label="Close" onClick={() => deleteitem(i)}></button>
       </form>
</div>
    )
})
    return <>{mapdata}</>
 }
     
export default Viewcontact