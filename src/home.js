import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
    return(
        <div className="HomePage" class="container bg-dark text-light p-3">
            <p class="pb-5 pt-5"><b>Upload</b></p>
            <input id="file" type="file" name="file" accept="image/*"/>
            <input class="btn btn-primary" type="submit" value="Upload"
                   onclick=""/>

            <p class="pb-5 pt-5"><b>Image</b></p>
            <div id="view" class="img-fluid img-thumbnail"
                 style="display:none;">
                <div style="float: left;">
                    <img id="image" width="600"/>
                </div>
            </div>
        </div>
        )
}

export default HomePage;