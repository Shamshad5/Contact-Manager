
import { useState } from 'react';
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header';
import uuid4 from 'uuid4';

function App() {
  const [contact,setContact]=useState([]);

  const addContact=(data)=>{
        setContact([...contact,{id: uuid4(),data}])
  }

  const removeContact=(id)=>{
     const updatedList=contact.filter((val)=>{
      return val.id !==id;
     })
     setContact(updatedList)
  }

  


  return (
    <div className="App">
      <Header />
      <AddContacts addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
