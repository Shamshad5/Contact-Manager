import React from 'react'
import "./ContactList.css"
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const ContactList = (props) => {
  const {contact,removeContact}=props;
  const list=contact.map((value)=>{
    return(
          <div className='list'>
              <div className="tems">{value.data.name}</div>
              <div className="Itmes">{value.data.mail}</div>
              <span onClick={()=>removeContact(value.id)}><BackspaceOutlinedIcon /></span>
          </div>
    )
  })
  return (
    <>
         {list}
    </>
  )
}

export default ContactList;