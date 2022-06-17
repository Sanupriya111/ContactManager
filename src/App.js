import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Addcontact from './components/add/Addcontact';
import Viewcontact from './components/view/Viewcontact';
import{useEffect} from "react"
function App() {
  
  const [contacts,setContacts]=useState([])
  function getData(data)
  {
console.log("data : ",data);
setContacts([...contacts,{...data}])
 // console.log("outsisde"+ JSON.stringify(filtdata));
  
}
const removeId=(item)=>{
    const filtdata=contacts.filter((check,i,rep)=>{
   
  return (i !==item)
   });
   setContacts(filtdata)
  console.log( "App data:",contacts)
    }
    useEffect(()=>{
   localStorage.setItem("contactslocal",JSON.stringify(contacts))
  },[contacts]);
    return ( 
        <div class="container">
        <div class="row">
      <Addcontact getData={getData}/></div>
      <div class="row"><br/><br/> <Viewcontact list={contacts} remove={removeId}/></div>
          </div>
        );
      }  