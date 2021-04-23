import React, {useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const errorHandler = e => {
        setContact({
            ...contact,
			[e.target.name] : e.target.value
		});
	}

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    const submitHandler = e => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((response) => {
                alert("Thank you for contacting me. I will try to get back to you as soon as I am able.")
                console.log('Successful sendoff!', response.status, response.text);
            }, (error) => {
                alert("Oops, message failed to send.")
                console.log('Failed to send...', error);
        });
        setContact({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={errorHandler} value={contact.name}/>
                    <p className="contact-error">{(contact.name.length > 1 || contact.name.length === 0) ? "" : "Name must be at least 2 characters."}</p>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email Address" onChange={errorHandler} value={contact.email}/>
                    <p className="contact-error"> {(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? "" : "You have entered an invalid email address."}</p>
                </div>
                <div>
                    <input type="text" name="subject" placeholder="Subject" onChange={errorHandler} value={contact.subject}/>
                </div>
                <div>
                    <textarea name="message" cols="30" rows="10" placeholder="Your message" onChange={errorHandler} value={contact.message}></textarea>
                    <p className="contact-error">{(contact.message.length > 1 || contact.message.length === 0) ? "" : "Message must be at least 2 characters."}</p>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact