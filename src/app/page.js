import Image from "next/image";
import styles from "./page.module.css";
import {Form,FormControl,Button} from 'react-bootstrap'

export default function Home() {
  return (
    <>
    <div className="mt-5 ms-3">
    <h2>Welcome to Simbha-Blogs</h2>
    <p>you can see the latest news here...</p>
    </div>
    <div className="container mt-5">
    <div className="row justify-content-end">
    <div className="col-5">
    <Form className="d-flex mx-auto" style={{ maxWidth: '400px' }}>
              <FormControl
                type="search"
                placeholder=" search for movies"
                className="me-2"
                aria-label="Search"
              />
           
              <Button variant="primary">Search</Button>
            </Form>
     </div>
     </div>
     <div className='row mt-5'>
      <div className="col-md-4">
      <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-4">
      <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-4">
      <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
     </div>
    </div>
    </>
  );
}
