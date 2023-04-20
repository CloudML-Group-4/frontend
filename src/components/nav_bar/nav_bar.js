import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const NavBar = () => {

    const [search, setSearch] = useState();

    const serverUrl = "http://127.0.0.1:8000";

    const navigate = useNavigate();

    const onSearchEdit = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${serverUrl}/contacts/find-text`, {
            name: search
        })
        .then((res) => {
            navigate( '/results', {state: {data: res.data}})
        })
        .catch(e => console.log(e));
    }

    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-secondary">
            <div class="container-fluid text-light">
                <Link to="/" class="navbar-brand text-light">Business Card</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link text-light">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link text-light">Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search" onSubmit={handleSubmit}>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearchEdit}></input>
                        <button class="btn btn-outline-success text-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;