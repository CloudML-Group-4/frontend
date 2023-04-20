import 'bootstrap/dist/css/bootstrap.css';
import './contact_form.css'
import { useNavigate } from 'react-router-dom';


const ContactForm = () => {

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/');
    }

    return(
        <div className="ContactForm" class="container bg-dark text-light p-3 border-color w-25 mt-5">
            
            <h1 class="text-center">Contact Form</h1>
            <form onSubmit={onSubmit} method="post" class="pt-5">
                <div class="mb-3">
                    <label for="first_name" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" name="first_name"></input>
                </div>
                <div class="mb-3">
                    <label for="email_address" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email_address" name="email_address"></input>
                </div>
                <div class="mb-3">
                    <label for="phone_number" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone_number" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                    <small>Format: 123-456-7890</small>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control" id="message" name="message"></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;