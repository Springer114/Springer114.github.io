import React, {useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [contact, setContact] = useState();

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    const submitHandler = e => {
        e.preventDefault();
        

        emailjs.sendForm('service_ab50ijs', 'template_qkynpzl', e.target, 'user_8gV2LbpIcmv6wgowbTHkI')
            .then((response) => {
                console.log('Successful sendoff!', response.status, response.text);
            }, (error) => {
                console.log('Failed to send...', error);
        });
    };


    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={e => setContact(e.target.value)} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email Address" onChange={e => setContact(e.target.value)}/>
                </div>
                <div>
                    <input type="text" name="subject" placeholder="Subject" onChange={e => setContact(e.target.value)}/>
                </div>
                <div>
                    <textarea name="message" cols="30" rows="10" placeholder="Your message" onChange={e => setContact(e.target.value)}></textarea>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact