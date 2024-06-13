import React from 'react'
import styled from 'styled-components'
import "../Paint/bootstrap.min.css"
import "../Paint/bootstrap.min.js"
import painter1 from '../Paint/painter1.jpg'
import painter2 from '../Paint/painter2.jpg'
import painter3 from '../Paint/painter3.jpeg'
const Container = styled.div`
    .service{
        width: 1280px;
        height: 700px;
        background-color: grey;
    }
    .services-top{
        width: 1280px;
        height: 150px;
        background-color: white;
        align-items: center;
        justify-content: center;
    }
    .services-down{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
    }
    .services{
        margin-top: 20px;
        width: 370px;
        height: 250px;
        background-color: green;
    }
    .project{
        width: 1280px;
        height: 900px;
        background-color: grey;
    }
    .project-top{
        width: 1280px;
        height: 150px;
        background-color: white;
        align-items: center;
        justify-content: center;
    }
    .project-down{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
    }
    .projects{
        margin-top: 20px;
        width: 370px;
        height: 250px;
        background-color: green;
    }
    .news{
        width: 1280px;
        height: 700px;
        /* background-color: blue; */
    }
    .news-top{
        width: 1280px;
        text-align: center;
        height: 150px;
        /* background-color: aliceblue; */
    }
    .news-down{
        display: flex;
        align-items: center;
        justify-content: space-around;

    }
    .blog{
        width: 400px;
        height: 500px;
        /* background-color: aquamarine; */
        margin-top: 30px;
        border-radius: 20px;
        border: 2px solid black;
    }
    .estimate{
        width: 1280px;
        height: 500px;
        background-color: grey;
        /* background-image: url(./Paint/painter1.png);
        background-size: cover; */
    }
    .slide{
        width: 1280px;
        height: 150px;
        background-color: green;
    }
    .package{
        width: 1280px;
        height: 400px;
        background-color: orange;
    }
    .number{
        width: 1280px;
        height: 120px;
        background-color: aliceblue;
    }
    .footer{
        width: 1280px;
        height: 350px;
        background-color: gainsboro;
    }
`

const Paint = () => {
    return (
        <Container>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">

                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={painter1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={painter2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={painter3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="service">
                <div className="services-top">
                    <div>Our Services</div>
                </div>
                <div className="services-down">
                    <div className="services">1</div>
                    <div className="services">2</div>
                    <div className="services">3</div>
                    <div className="services">4</div>
                    <div className="services">5</div>
                    <div className="services">6</div>
                </div>
            </div>

            <div className="project">
                <div className="project-top">
                    <div>Our Projects</div>
                </div>
                <div className="project-down">
                    <div className="projects"></div>
                    <div className="projects"></div>
                    <div className="projects"></div>
                    <div className="projects"></div>
                    <div className="projects"></div>
                    <div className="projects"></div>
                </div>
            </div>

            <div className="news">
                <div className="news-top">
                    <h1>News</h1>
                </div>
                <div className="news-down">
                    <div className="blog"></div>
                    <div className="blog"></div>
                    <div className="blog"></div>
                </div>
            </div>

            <div className="estimate">

            </div>

            <div className="slide">

            </div>
            <div className="package">

            </div>
            <div className="number">

            </div>
            <div className="footer">

            </div>
        </Container >
    )
}

export default Paint