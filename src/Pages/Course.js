import { Link } from "react-router-dom"
import { facilities } from "../data"
const Course = () => {
  return (
    <>
      <div className="container-fluid main-child2">
        <nav class="navbar navbar-expand ">
          <div class="container-fluid">
            <img className="logo-img ms-4" src="/images/logo.jfif" alt="" />

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav me-5 ">
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5">
                  <Link class="nav-link active text-black" aria-current="page" to="/About">About</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="/Course">Course</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="/Blog">Blog</Link>
                </li>
                <li class="nav-item me-3 fw-bold fs-5 ">
                  <Link class="nav-link active text-black" aria-current="page" to="/Contact">Contact</Link>
                </li>

              </ul>

            </div>

          </div>

        </nav>
        <div className="row text-center mt-5">
          <div className="col-12">
            <h1 className="text-black fw-bold fs-1">COURSES</h1>

          </div>
        </div>



      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-12 col-sm-12">
            <h2 className="mt-4">COURSE WE OFFER</h2>
            <p className="ms-5 me-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis voluptates a unde impedit nisi nostrum temporibus esse quis, voluptas ab architecto obcaecati tempore nemo aut ducimus voluptatem repellendus sequi.</p>
            <div className="row text-center mt-5 mb- ms-5">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center  home-child me-3 ms-3 mb-4 ">
                <h5 className="mt-4"> POST-GRADUATE</h5>
                <p className="mt-3 me-4 ms-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa recusandae maxime voluptatum dolorem quisquam reprehenderit, obcaecati culpa laudantium sapiente cupiditate.</p>

              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12  home-child ms-3 me-3 mb-4 ">
                <h5 className="mt-4">PHD</h5>
                <p className="mt-3 ms-4 me-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa recusandae maxime voluptatum dolorem quisquam reprehenderit, obcaecati culpa laudantium sapiente cupiditate.</p>

              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12  home-child ms-3  mb-4">
                <h5 className="mt-4">GRADUATE</h5>
                <p className="mt-3 ms-4 me-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa recusandae maxime voluptatum dolorem quisquam reprehenderit, obcaecati culpa laudantium sapiente cupiditate.</p>

              </div>

            </div>

          </div>

        </div>
        <div className="row text-center">
          <div className="col-12">
            <h1 className="mt-5 mb-4">OUR FACILITIES</h1>
            <p className="mt-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dicta consequuntur dolor, natus ipsam, possimus necessitatibus mollitia hic laudantium quam odio est ut fuga asperiores facere a cupiditate.</p>

          </div>
          <div className="row">
            {
              facilities.map((abc) => (
                <>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 fac-child">
                    <img className="mt-3 mb-3 mx-1" src={abc.img} alt="" />
                    <h4 className="mt-3 mb-3 mx-1text-start   fw-bold ">{abc.name}</h4>
                    <p className="mt-3 mb-3 me-5 mx-4 text-start">{abc.decs}</p>

                  </div>
                </>
              )
              )
            }

          </div>

        </div>
      </div>

    </>
  )
}
export default Course