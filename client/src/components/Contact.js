import React from 'react'

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <form action="" method="post">
                <div>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email Address"/>
                </div>
                <div>
                    <input type="text" name="subject" placeholder="Subject"/>
                </div>
                <div>
                    <textarea name="message" cols="30" rows="10" placeholder="Your message"></textarea>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact