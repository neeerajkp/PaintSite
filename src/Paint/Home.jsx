import React from 'react'
import '../Paint/bootstrap.css'
import '../Paint/bootstrap.bundle.min.js'
import styled from 'styled-components'
import painter1 from '../Paint/painter1.jpg'
import painter2 from '../Paint/painter2.jpg'
import painter3 from '../Paint/painter3.jpeg'

const Container = styled.div`
    


`
const Home = () => {
    return (
        <Container>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/New">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/About'>About-Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#estimate">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='#project'>Gallery</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={painter1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={painter2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={painter3} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


        </Container>
    )
}

export default Home