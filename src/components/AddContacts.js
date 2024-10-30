import React, { useState } from 'react'
import "./AddContacts.css"

const AddContacts = ({addContact}) => {  

  const [userData,setUserData]=useState({ name: "", mail: "" })


  const handleChange=(e)=>{
     if(e.target.name === "name"){
      setUserData({...userData,name: e.target.value})
     }
     else{
        setUserData({...userData,mail: e.target.value})
     }
  }

 const handleAdd=()=>{
  if(userData.name==="" || userData.mail===""){
    alert("Please fill the form")
    return
         }
           addContact(userData)
           setUserData({name:"",mail:""}) //this line is to make emty the input field after clicking add button
 }

  return (
    <>
      <div className="contact">
        <h2>Add Contacts</h2>
        <form className='form' action="">
            <label className="name" for="name">Name: <br></br>
                <input 
                type='text' 
                id='name' 
                value={userData.name} 
                onChange={handleChange} 
                placeholder='Enter Your Name'
                name='name' />
            </label>
            <label className="mail" for="mail">Mail: <br></br>
                <input 
                type='email' 
                id='mail' 
                value={userData.mail} 
                onChange={handleChange} 
                placeholder='Enter Your Mail' 
                name='mail' />
            </label>
        </form>
        <button 
        className='btn'
        onClick={handleAdd}>
          Add Contact
        </button>
      </div>
    </>
  )
}

export default AddContacts