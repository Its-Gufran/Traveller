import "./ContactForm.css"

function ContactForm()
{
    return(
        <div className="form-container">
            <h1>Send a message to Us!</h1>
            <form>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Subject"></input>
                <textarea placeholder="message" rows={4}></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;