import React, { useState } from 'react'
import './Form.css'

function FormReact() {

  // const[name1, setname1] = useState("")
  // const[name2, setname2] = useState("")
  // const[email, setemail] = useState("")
  // const[pass, setpass] = useState("")
  const[ishow, setishow] = useState(false)

  // const handleName1 = (e)=>{
  //   setname1(e.target.value)
  // }
  // const handleName2 = (e)=>{
  //   setname2(e.target.value)
  // }
  // const handleEmail = (e)=>{
  //   setemail(e.target.value)
  // }
  // const handlePassword = (e)=>{
  //   setpass(e.target.value)
  // }
  const handleAdd = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData);
    setishow(true)
  }
  return (
    <div className='main'>
        <div className='sub'>
        <h2>Registration Form</h2>

        {!ishow ?
        <form onSubmit={handleAdd}>
         <label className='lable'>First Name </label><br />
         <input type="text" className='input' placeholder='Enter first name'/><br /><br />

         <label className='lable'>Last Name </label><br />
         <input type="text" className='input' placeholder='Enter last name'/><br /><br />

         <label className='lable'>Email </label><br />
         <input type="text" className='input' placeholder='Enter email'/><br /><br />

         <label className='lable'>Password </label><br />
         <input type="password" className='input' placeholder='Password'/><br /><br />

         <button className='button'>Submit</button>
         </form>
          : <h1>Form saved</h1> }
{/* 
        {ishow && 
        <div>
         <h1>First Name: {name1}</h1>
         <h1>Last Name: {name2}</h1>
         <h1>Email: {email}</h1>
         <h1>Password: {pass}</h1>
         </div>
        } */}

         </div>

    </div>
  )
}

export default FormReact