import { Link } from "react-router-dom"
import "./About.css"

const About = () => {
    return (

        <>
            <div className="container-fluid main-child2">
                <nav class="navbar navbar-expand ">
                    <div class="container-fluid">
                        <img className="logo-img ms-4" src="/images/logo.jfif" alt="" />
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="justify-content-end" id="navbarNav">
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
                        <h1 className="text-black fw-bold fs-1">ABOUT US</h1>

                    </div>
                </div>
            </div>



            <div className="row text-center mt-5 mb-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h3 className="mt-2 fw-bold ms-4">NO 1 IT UNIVERSITY OF PAKISTAN</h3>
                    <p className=" ms-5 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque hic, dicta autem vero nulla distinctio consectetur sedadipisicing elit. Doloremque hic, dicta autem vero nulla  mollitia consequuntur tempora nisi cupiditate quis accusamus
                        adipisicing elit. Doloremque hic, dicta autem vero nulla eligendi blanditiis ipsam itaque corporis unde!</p>


                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 about-child">
                    <img src="/images/abbottabad.jfif" alt="" />

                </div>
                <div className="col-4 about-btn">
                    <button className="mt-3 ms-5 ">EXPLORE NOW</button>
                </div>

            </div>




        </>
    )
}
export default About