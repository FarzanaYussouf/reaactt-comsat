
import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
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
                  <a class="nav-link active text-white" aria-current="page" to="/Home">Home</a>
                </li>
                <li class="nav-item me-3 fw-bold fs-5">
                  <a class="nav-link active text-white" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <a class="nav-link active text-white" aria-current="page" href="#">Course</a>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <a class="nav-link active text-white" aria-current="page" href="#">Blog</a>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <a class="nav-link active text-white" aria-current="page" href="#">Contact</a>
                </li>

              </ul>

            </div>

          </div>

        </nav>
        <div className="row text-center mt-5">
          <div className="col-12">
            <h1 className="text-white fw-bold fs-1">NO 1 IT UNIVERSITY OF PAKISTAN</h1>
            <p className="mt-3 text-white fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui eveniet cum, ullam aspernatur  sint voluptatibus consequuntur dolor ratione id dolorum. Totam, ipsam.</p>
          </div>
          </div>
          <div className="row text-center mb-5">
          <div className="col-12">
            <button className="mt-4  fw-bold bg-light nav-btn">VISIT US</button>


          </div>


        </div>
      </div>





    </>



  )
}
export default Navbar