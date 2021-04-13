import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <form action="" method="post">
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email Address"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea name="message" cols="30" rows="10" placeholder="Your message"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default Contact