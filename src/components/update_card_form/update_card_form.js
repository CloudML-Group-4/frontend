import 'bootstrap/dist/css/bootstrap.css';
import './update_card_form.css'


const UpdateCardForm = () => {
    return(
        <div className="UpdateCardForm" class="container bg-dark text-light p-3">
            <form action="" method="post">
                <div class="mb-3">
                    <label for="lead_name" class="form-label">Lead Name</label>
                    <input type="text" class="form-control" id="lead_name" name="lead_name"></input>
                </div>
                <div class="mb-3">
                    <label for="phone_number" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone_number" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                    <small>Format: 123-456-7890</small>
                </div>
                <div class="mb-3">
                    <label for="email_address" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email_address" name="email_address"></input>
                </div>
                <div class="mb-3">
                    <label for="company_website" class="form-label">Company Website</label>
                    <input type="text" class="form-control" id="company_website" name="company_website"></input>
                </div>
                <div class="mb-3">
                    <label for="company_address" class="form-label">Company Address</label>
                    <input type="text" class="form-control" id="company_address"></input>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateCardForm;