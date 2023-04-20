import 'bootstrap/dist/css/bootstrap.css';
import './edit_card_form.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



const EditCardForm = () => {

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [website, setWebsite] = useState();
    const [address, setAddress] = useState();

    const navigate = useNavigate();

    const data = useLocation().state.data;

    const serverUrl = "http://127.0.0.1:8000";

    useEffect(() => {
        axios.get(`${serverUrl}/images/${data.fileId}/detect-text`)
        .then((res) => {
            console.log('edit_card_form')
            console.log(res.data.email)
            setName(res.data.name);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setWebsite(res.data.website);
            setAddress(res.data.address);
        })
        .catch((e) => console.log(e))
    }, [])

    const onEditSubmit = (e) => {
        e.preventDefault();
        axios.post(`${serverUrl}/contacts/${data.fileId}/save-text`, {
            name: name,
            phone: phone,
            email: email,
            website: website,
            address: address,
            imgUrl: data.fileUrl
        })
        .then((res) => {
            localStorage.setItem(res.data.access_id, res.data.id);
            navigate( '/');
        })
        .catch(e => console.log(e))
    }


    return(
        <div>
            <div class="position-absolute">
                <img src={data.fileUrl} alt={data.fileId} width="500" height="600"/>
            </div>
            <div className="UpdateCardForm" class="container bg-dark text-light p-3 border-color w-25 mt-5">
                
                <h1 class="text-center">Edit Business Card</h1>
                <form class="pt-5" onSubmit={onEditSubmit}>
                    <div class="mb-3">
                        <label for="lead_name" class="form-label">Lead Name</label>
                        <input type="text" class="form-control" id="lead_name" name="lead_name" required value={name || ''} 
                            onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                        <label for="phone_number" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="phone_number" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone || ''}
                            onChange={(e) => setPhone(e.target.value)}></input>
                        <small>Format: 123-456-7890</small>
                    </div>
                    <div class="mb-3">
                        <label for="email_address" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email_address" name="email_address" value={email || ''} 
                            onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                        <label for="company_website" class="form-label">Company Website</label>
                        <input type="text" class="form-control" id="company_website" name="company_website" value={website || ''} 
                            onChange={(e) => setWebsite(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                        <label for="company_address" class="form-label">Company Address</label>
                        <input type="text" class="form-control" id="company_address" value={address || ''}
                            onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default EditCardForm;