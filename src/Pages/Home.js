import "./Home.css"
import { campuses, facilities } from "../data"
const Home = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row text-center">
          <div className="col-12 col-md-12 col-sm-12">
            <h2>COURSE WE OFFER</h2>
            <p className="ms-5 me-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis voluptates a unde impedit nisi nostrum temporibus esse quis, voluptas ab architecto obcaecati tempore nemo aut ducimus voluptatem repellendus sequi.</p>
            <div className="row text-center mt-5 mb- ms-5">
              <div className="col-lg-4 col-md-4 col-sm-12  home-child me-3 ms-3 mb-4 ">
                <h5 className="mt-4"> POST-GRADUATE</h5>
                <p className="mt-3 me-4 ms-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa recusandae maxime voluptatum dolorem quisquam reprehenderit, obcaecati culpa laudantium sapiente cupiditate.</p>

              </div>
              <div className="col-lg-4 col-md-4 col-sm-12  home-child ms-3 me-3 mb-4 ">
                <h5 className="mt-4">PHD</h5>
                <p className="mt-3 ms-4 me-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa recusandae maxime voluptatum dolorem quisquam reprehenderit, obcaecati culpa laudantium sapiente cupiditate.</p>

              </div>
              <div className="col-lg-4 col-md-4 col-sm-12  home-child ms-3  mb-4">
                <h5 className="mt-4">GRADUATE</h5>
                <p className="mt-3 ms-4 me-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa recusandae maxime voluptatum dolorem quisquam reprehenderit, obcaecati culpa laudantium sapiente cupiditate.</p>

              </div>

            </div>

          </div>

        </div>
        <div className="row text-center">
          <div className="col-12">
            <h1 className="mt-5 mb-3">OTHER CAMPUSES</h1>
            <p className="mt-3 mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem laudantium alias vero cumque doloribus excepturi at adipisci. Eum, sed.</p>

          </div>
          <div className="row">
            {
              campuses.map((abc) => (
                <>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 campus-child">
                    <img className="mt-4" src={abc.img} alt="" />
                    <button className="mt-4 mb-4 border border-5 fw-bold">{abc.btn}</button>

                  </div>
                </>
              )
              )
            }

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
        <div className="row text-center mt-5 mb-5">
          <div className="col-12">
            <h1 className="mt-5 mb-3">OUR STUDENTS REVIEW</h1>
            <p className="mt-3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt iusto laudantium, non officia magnam eius libero cupiditate animi perferendis corporis quo impedit aliquam neque expedita reprehenderit omnis atque in!</p>

          </div>
          <div className="row text-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
              <div class="card mb-3 mt-3 card-first-child ms-5 me-5" style={{ width: "280px" }}>
                <div class="row g-0">
                  <div class="col-md-6 card-child">
                    <img src="/images/customer-3.jpg" class="img-fluid " alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">

                      <p class="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, esse.</p>
                      <h5 className="mt-4">TALHA KHAN</h5>
                      <p class="card-text mt-4 text-body-secondary fw-bold">*****</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                <div class="card mb-3 mt-3 ms-5 card-first-child" style={{ width: "280px" }}>
                  <div class="row g-0">
                    <div class="col-md-6 card-child">
                      <img src="/images/customer-1.jpg" class="img-fluid " alt="..." />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">

                        <p class="card-text mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dsghds dhsdgd possimus?</p>
                        <h5 className="mt-4">AFFAQ KHAN</h5>
                        <p class="card-text"><small class="text-body-secondary fw-bold mt-3">*****</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              <div class="card mb-3 mt-3 ms-5 card-first-child" style={{ width: "280px" }}>
                <div class="row g-0">
                  <div class="col-md-6 card-child">
                    <img src="/images/customer-2.jpg" class="img-fluid " alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">

                      <p class="card-text mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos consequatur id.</p>
                      <h5 className="mt-4">ALI AHMED</h5>
                      <p class="card-text"><small class="text-body-secondary mt-3 fw-bold">*****</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div className="row text-center mt-3 mb-5">
          <div className="col-12 last-child text-center">
            <p className="fw-bold mt-5 pe-5 pt-5 text-center text-white fs-5">Enroll For Our Various Online Courses
Anywhere From The World</p>
<button className="mt-4 mb-5 me-5 fw-bolder fs-5">
  CONTACT US
</button>

          </div>

        </div>

      </div>

    </>

  )
}
export default Home