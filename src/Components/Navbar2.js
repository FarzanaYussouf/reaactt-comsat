import { Link } from "react-router-dom"
import "./Navbar2.css"
const Navbar2 =()=>{
    return (
        <>
 <div className="container-fluid main-child">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <img className="logo-img ms-4" src="/images/logo.jfif" alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav me-5 ">
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5">
                  <Link class="nav-link active text-black" aria-current="page" to="/About">About</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="#">Course</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="/Blog">Blog</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <a class="nav-link active text-black" aria-current="page" href="#">Contact</a>
                </li>

              </ul>

            </div>

          </div>

        </nav>
        <div className="row text-center mt-5">
          <div className="col-12">
            <h1 className="text-black fw-bold fs-1">ABOUT US</h1>
            {/* <p className="mt-3 fs-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui eveniet cum, ullam aspernatur  sint voluptatibus consequuntur dolor ratione id dolorum. Totam, ipsam.</p> */}
          </div>
          </div>
         


          </div>


        
      

        </>
    )
}
export default Navbar2