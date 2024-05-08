import { Link } from "react-router-dom"
import "./Contact.css"
const Contact = () => {
    return (
        <>
            <div className="container-fluid main-child2">
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
                                    <Link class="nav-link active text-black" aria-current="page" to="/Course">Course</Link>
                                </li>
                                <li class="nav-item me-3 fw-bold fs-5 ">
                                    <Link class="nav-link active text-black" aria-current="page" to="/Blog">Blog</Link>
                                </li>
                                <li class="nav-item me-3 fw-bold fs-5 ">
                                    <Link class="nav-link active text-black" aria-current="page" to="/Contact">Contact </Link>
                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>

                <div className="row text-center mt-5">
                    <div className="col-12">
                        <h1 className="text-black fw-bold fs-1">CONTACT US</h1>

                    </div>
                </div>
            </div>

            <div className="row mt-5 mb-4 text-center">
                <div className="col-12 con-child">
                    <img src="/images/map.jfif" class="img-fluid " alt="..." />

                </div>

            </div>
            <div className="container mt-5 mb-5">
                <div className="row text-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row mt-5 text-center">
                            <div className="col-2 con-2">
                            <img className="" src="/images/home.jfif" class="img-fluid " alt="..." />

                            </div>
                            <div className="col-10">
                                <h4 className="text-start">express highway Islamabad</h4>
                                <p className="text-start">Islamabad Pakistan</p>


                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col-2 con-2">
                            <img src="/images/mail.jfif" class="img-fluid " alt="..." />

                            </div>
                            <div className="col-10">
                                <h4 className="text-start">comsat @gmail.com</h4>
                                <p className="text-start">email us</p>


                            </div>

                        </div>
                        <div className="row text-center mt-2">
                            <div className="col-2 con-2">
                            <img src="/images/call.jfif" class="img-fluid " alt="..." />

                            </div>
                            <div className="col-10">
                                <h4 className="text-start">+92 09876543225</h4>
                                <p className="text-start">Monday to Friday, 10AM to 6PM</p>


                            </div>

                        </div>


                    </div>
                   
                
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-1 mb-3 text-center  ">
                        <h3 className=" ">Leave A Comment</h3>
                        <div class="input-group mb-3 mt-4">
                            <input type="text" class="form-control" placeholder="Enter Name" aria-label="Recipient's username" aria-describedby="button-addon2" />

                        </div>
                        <div class="input-group mb-3 mt-4">
                            <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />

                        </div>
                        <div class="input-group mb-3 mt-4">
                            <input type="text" class="form-control" placeholder="Enter Your Subject" aria-label="Recipient's username" aria-describedby="button-addon2" />

                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <div className="row blog-2">
                            <div className="col-10">
                                <button className="mt-4 me-5 fw-bold mb-4">SEND MESSAGE</button>

                            </div>

                        </div>

                    </div>

                </div>

           

                </div>

            





        </>
    )
}
export default Contact