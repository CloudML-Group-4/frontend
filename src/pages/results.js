import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {

    const serverUrl = "http://127.0.0.1:8000";

    const navigate = useNavigate();

    const data = useLocation().state.data;

    const handleUpdate = (id, access_id) => {
        navigate( '/card_update', {state: {id: id, access_id: access_id}})
    }

    const handleDelete = (id) => {
        axios.delete(`${serverUrl}/contacts/${id}/delete-text`);
        navigate('/');
    }

    console.log(data.length)

    let cards = data.map((item) => {

        return <div class='col'>
                    <div class="card m-5" style={{width: 18 + 'rem'}}>
                        <img class="card-img-top" src={item['imgUrl']['S']} alt={item['id']['S']}/>
                        <div class="card-body">
                            <h5 class="card-title mb-4 text-center fw-bold">{item['username']['S'].charAt(0).toUpperCase() + item['username']['S'].slice(1)}</h5>
                            <p class='card-text'>ID: {item['id']['S']}</p>
                            <p class="card-text">Phone: {item['phone']['S']}</p>
                            <p class="card-text">Email: {item['email']['S']}</p>
                            <p class="card-text">Website: {item['website']['S']}</p>
                            <p class="card-text">Address: {item['address']['S']}</p>
                            {item['id']['S'] === localStorage.getItem(item['access-id']['S']) &&
                                <div>
                                    <button class="btn btn-primary me-3 ms-3" onClick={() => handleUpdate(item['id']['S'], item['access-id']['S'])}>Update</button>
                                    <button class="btn btn-danger ms-5" onClick={() => handleDelete(item['id']['S'])}>Delete</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
    })

    if (data.length === 0) {
        cards =  <div class="container pt-5 text-center">
                    <h1 class="text-light">Empty List</h1>
                </div>
    }

    return(
        <div class='container'>
            <div class='row'>
                {cards}
            </div>
        </div>
    )
}

export default Results;

// 'phone': {'S': item['phone'] or 'NULL'},
//       'email': {'S': item['email'] or 'NULL'},
//       'website': {'S': item['website'] or 'NULL'},
//       'address': {'S': item['address'] or 'NULL'},