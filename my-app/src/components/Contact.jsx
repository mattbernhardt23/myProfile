import { useState, useRef, forwardRef } from "react";
import { toast } from "react-toastify";


const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: ""
  })


  const {name, email, message} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))}

  const smtpjs = window.Email;

  const onSubmit = async (e) => {
    e.preventDefault()

    const myEmail = 'matth3w.bernhardt@gmail.com'

    try {
    smtpjs
    .send({
      SecureToken: "dbcb3dff-212c-40ab-ad13-ad15188fd8f2",
      Host : "smtp.elasticemail.com",
      Username : myEmail,
      Password : "454135E52143F58C06FCF847A5AB2483432A",
      To : myEmail,
      From : myEmail,
      Subject : `${name} has sent you a message!`,
      Body : {
        name,
        email,
        message,
      }
    })
    .then(() => {toast.success("Thank you! Message Sent")})
    .then(setFormData({
      name:"",
      email: "",
      message: ""
    }))
  } catch (error) {
    toast.error("Unable to Send")
  }

  setFormData({
    name: "",
    email: "",
    message: "Thank you! Your message has been sent."
  })
  
  }

  return (
    <div 
      className="bg-gradient-to-t to-neutral-900 from-neutral-700 pb-20 lg:p-20 lg:pt-20 flex flex-col items-center w-full"
      ref={ref}
    >
      <h2 className="text-neutral-400 text-xl font-mono pb-8">Contact</h2>
      <div className="w-full">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col lg:flex-row md:content-between items-center m-4">
        <div className="w-3/4 lg:w-1/2 m-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            className="w-full p-4 focus:ring-red-500 shadow-md focus:border-red-500 block sm:text-lg border-gray-700 rounded-md text-neutral-700"
            id="name"
            onChange={onChange}
            required
          />
        </div>  
        <div className="w-3/4 lg:w-1/2 m-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            id="email"
            className="w-full p-4 focus:ring-red-500 shadow-md focus:border-red-500 block sm:text-lg border-gray-700 rounded-md text-neutral-700"
            onChange={onChange}
          />
        </div>  
        </div>
        <div className="flex flex-col items-center m-4 lg:m-8">
          <textarea 
            className="w-3/4 lg:w-full focus:ring-red-500 shadow-md focus:border-red-500 block p-4 sm:text-lg border-gray-700 rounded-md text-neutral-700"
            placeholder="Hello Matthew, have some ideas we'd love to run by you..."
            value={message}
            id="message" 
            rows="4"
            onChange={onChange}
          ></textarea>
        </div>  
      
      
      <div className="flex flex-col items-center pt-8">
        <button type='submit' className="border-2 border-black rounded-lg p-4 font-extrabold text-slate-200 bg-gradient-to-l to-neutral-500 from-neutral-900 tracking-widest hover:scale-110 ease-in-out duration-500">Send</button>
      </div>
      </form>
      </div>
    </div>
  )
})

export default Contact