import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const [file, setFile] = useState();

    const serverUrl = "http://127.0.0.1:8000";

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let converter = await new Promise(function(resolve, reject) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.toString().replace(/^data:(.*,)?/, ''));
            reader.onerror = (error) => reject(error);
        });

        axios.post(`${serverUrl}/images`, {
            filename: file.name, 
            filebytes: converter    
        })
        .then((res) => {
            navigate( '/card_update', {state: {data: res.data}})
        })
        .catch((e) => console.log(e))
    }

    return(
        <div className="HomePage" class="container bg-dark text-light p-3 border-color w-25 mt-5">
            <h1 class="text-center">Upload Business Card</h1>
            <form class="pt-5" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input id="file" type="file" name="file" accept="image/*" onChange={handleFileChange}/>
                </div>
                <div class="mb-3 text-center">
                <Button type="submit" class="btn btn-primary">Upload </Button>
                </div>
            </form>
        </div>
        )
}

export default HomePage;