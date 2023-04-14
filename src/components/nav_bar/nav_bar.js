import { Link } from "react-router-dom";

const NavBar = () => {
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
                            <Link to="/card_update" class="nav-link text-light">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link text-light">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link text-light">Sign Up</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success text-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;