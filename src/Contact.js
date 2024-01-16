import ContactForm from './ContactForm';

function Contact() {
    return(<div className="contact">
    <div>
        <h1>CONTACT</h1>
        <p>You can reach us on the telephone on:</p>
        <p>Tel +49 7334 9654 - 87</p>
        <p>Fax +49 7334 9654 - 836</p>
        <p>Monday to Friday: 7:00 am - 5:00 pm</p>
        <p>Email: info@kraeuterhaus.de</p>
        <h3>Address:</h3>
        <p>Kräuterhaus Sanct Bernhard KG | Helfensteinstr. 47 | D-73342 Bad Ditzenbach</p>
        <h3 className='contact-us'>Please fill in the form below to contact our team</h3>
    </div>
    <div className="App">
        <div className='contact-form-container'>
        <ContactForm/>
        </div>    
    </div>
    </div>
    )
}

<img className="contact-picture" src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/Office.jpg?v=1705057347755" alt="company" width="400px"/>


export default Contact;