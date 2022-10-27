import { useState, useRef, forwardRef } from "react";


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
    .then((message) => alert(message));
  } catch (error) {
    console.log(error)
  }

  setFormData({
    name: "",
    email: "",
    message: "Thank you! Your message has been sent."
  })
  
  }

  return (
    <div className="contactContainer" ref={ref}>
      <h2>Contact</h2>
      <div className="formControl">
      <form onSubmit={onSubmit}>
        <div className="inputContainer">
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            className="inputItem"
            id="name"
            onChange={onChange}
            required
          />
        </div>  
        <div className="inputContainer">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            id="email"
            className="inputItem"
            onChange={onChange}
          />
        </div>  
        <div className="inputContainer">
          <textarea 
            className="messageInput" 
            value={message}
            id="message" 
            rows="6"
            onChange={onChange}
          ></textarea>
        </div>  
      
      
      <div className="contactButtonContainer">
        <button type='submit' className="contactButton">Send</button>
      </div>
      </form>
      </div>
    </div>
  )
})

export default Contact