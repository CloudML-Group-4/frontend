import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
    return(
        <div className="HomePage" class="container bg-dark text-light p-3 border-color w-25 mt-5">
            <h1 class="text-center">Upload Business Card</h1>
            <form action="" class="pt-5" method='post'>
                <div class="mb-3">
                    <input id="file" type="file" name="file" accept="image/*"/>
                </div>
                <div class="mb-3 text-center">
                    <button type="submit" class="btn btn-primary">Upload</button>
                </div>
            </form>
        </div>
        )
}

export default HomePage;