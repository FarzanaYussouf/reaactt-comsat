import "./Home.css"
import{campuses,facilities} from"../data"
const Home =() => {
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
                campuses.map((abc)=>(
                  <>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 campus-child">
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
                facilities.map((abc)=>(
                    <>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 fac-child">
                        <img className="mt-3 mb-3" src={abc.img} alt="" />
                        <h4 className="mt-3 mb-3 text-start   fw-bold ">{abc.name}</h4>
                        <p className="mt-3 mb-3 me-5 text-start">{abc.decs}</p>

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
<div className="col-lg-6 col-md-6 col-sm-12 col-12">
<div class="card mb-3 card-first-child" style={{width: "340px", height: "300px"}}>
  <div class="row g-0">
    <div class="col-md-4 card-child">
      <img className=" mt-5 ms-3 " src="/images/customer-3.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
    
        <p class="card-text mx-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, esse.</p>
        <h5 className="mt-4">TALHA KHAN</h5>
        <p class="card-text mt-4 text-body-secondary fw-bold">*****</p>
      </div>
    </div>
  </div>
</div>
<div className="col-lg-6 col-md-6 col-sm-12 col-12">
<div class="card mb-3" style={{width: "440px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/customer-1.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className="col-lg-6 col-md-6 col-sm-12 col-12">
<div class="card mb-3" style={{width: "440px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/customer-2.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>


        </div>

    </div>

</div>

</>

    )
}
export default Home