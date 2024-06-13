import React from 'react'
import styled from 'styled-components'
import "../Paint/bootstrap.min.css"
import "../Paint/bootstrap.min.js"
import painter1 from '../Paint/painter1.jpg'
import painter2 from '../Paint/painter2.jpg'
import painter3 from '../Paint/painter3.jpeg'
import office from '../Paint/office.png'
import house from '../Paint/house.jpeg'
import farm from '../Paint/farm.jpg'
import light from '../Paint/light.jpg'
import news1 from '../Paint/news1.png'
import news2 from '../Paint/news2.png'
import news3 from '../Paint/news3.png'
import bucket from '../Paint/bucket.jpg'
import review1 from '../Paint/review1.png'
import review2 from '../Paint/review2.png'
import review3 from '../Paint/review3.png'

const Container = styled.div`
        #service{
        margin-top: 510px;
        width: 1280px;
        height: 700px;
        /* background-color: grey; */
    }
    .services-top{
        width: 1280px;
        height: 130px;
        background-color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        display: flex;
        flex-direction: column;
        height: 250px;
        /* background-color: green; */
        align-items: center;
        justify-content: center;
    }
    
    .line{
        width: 300px;
        height: 2px;
        background-image: linear-gradient(to right,red,green);
    }
    .project{
        width: 1280px;
        height: 900px;
        /* background-color: grey; */
    }
    .project-top{
        width: 1280px;
        height: 150px;
        display: flex;
        flex-direction: column;
        background-color: white;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .project-down{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
        margin-top: 20px;
    }
    .project-down-left{
        width: 780px;
        height: 700px;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
    }
    .project-down-left-top{
        width: 780px;
        height: 370px;
        background-image: url(${house});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
    }
    .hide{
        display: none;
    }
    .project-down-left-top:hover{
        filter: brightness(0.6);
        transform: scale(1.1);
        .hide{
            display:flex;
        }
    }
   .project-down-left-down{
        width: 780px;
        height: 300px;
        /* background-color: beige; */
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
   }
   .project-down-left-down1{
        width: 370px;
        height: 300px;
        background-image: url(${office});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;

   }
   .project-down-left-down1:hover{
        filter: brightness(0.6);
        transform: scale(1.1);
        .hide{
            display:flex;
        }
    }
   .project-down-left-down2{
        width: 370px;
        height: 300px;
        background-image: url(${farm});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
   }
   .project-down-left-down2:hover{
        filter: brightness(0.6);
        transform: scale(1.1);
        .hide{
            display:flex;
        }
    }

    .project-down-right{
        width: 400px;
        height: 700px;
        background-image: url(${light});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center; 
        transition: all 0.3s;  
     }
     .project-down-right:hover{
        filter: brightness(0.6);
        transform: scale(1.1);
        .hide{
            display:flex;
        }
    }
    
    .news{
        width: 1280px;
        height: 750px;
        /* background-color: blue; */
    }
    .news-top{
        width: 1280px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150px;
        /* background-color: aliceblue; */
    }
    .news-down{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .blog{
        width: 360px;
        height: 500px;
        display: flex;
        flex-direction: column;
        /* background-color: aquamarine; */
        margin-top: 30px;
        border-radius: 20px;
        border: 2px solid black;
        text-align:center;
    }
    .blog:hover{
        background-color:lightsteelblue;
        color: white;
        cursor: pointer;
    }
    h4{
        font-weight: bold;
    }
    .img1{
        border-radius: 20px 20px 0px 0px;
    }
    #estimate{
        width: 1280px;
        height: 550px;
        background-color: grey;
        background-image: url(${bucket});
        background-repeat:no-repeat;
        background-size: cover;
    }
    .box{
        margin-left: 50px;
        width: 600px;
        text-align: center;
        height: 500px;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
    }
    .free{
        margin-top: 50px;
    }
    .name-email{
        display: flex;
        margin-top: 20px;
        justify-content: space-around;
    }
    .phone{
        display: flex;
        flex-direction: column;
    }
    .inp1{
        width: 250px;
        height: 60px;
        border-radius: 10px;
        outline: none;
        border: none;
    }
    .inp2{
        width: 550px;
        height: 60px;
        margin-left: 25px;
        margin-top: 20px;
        border-radius: 10px;
        outline: none;
        border: none;
    }
    .inp3{
        width: 550px;
        height: 100px;
        margin-left: 25px;
        margin-top: 20px;
        border-radius: 10px;
        outline: none;
        border: none;
    }
    .send{
        margin-left: 150px;
        margin-top: 20px;
        width: 300px;
        height: 60px;
        border-radius: 30px;
        border: none;
    }
    .slide{
        width: 1280px;
        height: 150px;
        /* background-color: green; */
    }
    .package{
        width: 1280px;
        height: 380px;
        /* background-color: orange; */
    }
    .number{
        width: 1280px;
        height: 90px;
        text-align: center;
        align-items: center;
        color: white;
        display: flex;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        /* background-color: aliceblue; */
    }
    .color1{
        width: 215px;
        height: 90px;
        background-image: linear-gradient(to right,violet,indigo);
    }
    .color2{
        width: 210px;
        height: 90px;
        background-image: linear-gradient(to right,indigo,blue);
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .color3{
        width: 210px;
        height: 90px;
        background-image: linear-gradient(to right,blue,green);
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .color4{
        width: 210px;
        height: 90px;
        background-image: linear-gradient(to right,green,yellow);
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: end;
    }
    .color5{
        width: 215px;
        height: 90px;
        background-image: linear-gradient(to right,yellow,orange);
        display: flex;
        align-items: center;
        text-align: center;
    }
    .color6{
        width: 220px;
        height: 90px;
        background-image: linear-gradient(to right,orange,red);
    }
    #footer{
        width: 1280px;
        height: 350px;
        /* background-color: gainsboro; */
        display: flex;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    a{
        text-decoration: none;
        color: black;
        margin-top: 15px;
    }
    p{
        font-size: 25px;
    }
    .footer1{
        width: 350px;
        height: 350px;
        display: flex;
        flex-direction: column;
        /* background-color: aliceblue; */
    }
    .logo{
        width: 350px;
        height: 100px;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    .twitter,.instagram,.facebook{
        margin-left: 15px;
    }
    .footer2{
        width: 300px;
        height: 350px;
        /* background-color: blueviolet; */
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
    .footer3{
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        /* background-color: grey; */
    }
    .footer4{
        width: 330px;
        height: 350px;
        display: flex;
        flex-direction: column;
        
        /* background-color: blueviolet; */
    }
    .footer4-1{
        font-size:25px;
        margin-top: 30px;
        margin-left: 100px;
    }
    .footer4-2,.footer4-3,.footer4-4{
        display: flex;
        margin-top: 30px;
        margin-left: 80px;
    }
    h5{
        margin-left: 10px;
    }
    .home{
        margin-left: 10px;
    }
    
    .icon1{
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom,yellow,red);
        font-size: 70px;
    }
    .icon2{
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom,blue,purple);
        font-size: 70px;
    }
    .icon3{
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom,orange,yellow);
        font-size: 70px;
    }
    .icon4{
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom,lightblue,green);
        font-size: 70px;
    }
    .icon5{
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom,pink,red);
        font-size: 70px;
    }
    .icon6{
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom,blue,green);
        font-size: 70px;
    }
    .slide{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

const New = () => {
    return (
        <Container>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/New">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#estimate">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='#footer'>About Us</a>
                            </li>
                        </ul>
                    </div>
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
                        <img src={painter1} class="d-block w-100" alt="..." height={600} />
                    </div>
                    <div class="carousel-item">
                        <img src={painter2} class="d-block w-100" alt="..." height={600} />
                    </div>
                    <div class="carousel-item">
                        <img src={painter3} class="d-block w-100" alt="..." height={600} />
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

            <section id="service" >
                <div className="services-top">
                    <h1>Our Expert Services</h1>
                    <div className='line'></div>
                    <h3>"Life is for service."</h3>
                </div>
                <div className="services-down">
                    <div className="services">
                        <div className='icon1'><i class="fa-solid fa-paint-roller"></i></div>
                        <h4>Painting Service</h4>
                    </div>
                    <div className="services">
                        <div className='icon2'><i class="fa-solid fa-fill-drip"></i></div>
                        <h4>Paints</h4>
                    </div>
                    <div className="services">
                        <div className='icon3'><i class="fa-solid fa-vr-cardboard"></i></div>
                        <h4>Virtual Demo</h4>
                    </div>
                    <div className="services">
                        <div className='icon4'><i class="fa-solid fa-droplet"></i></div>
                        <h4>Mildew Removal</h4>
                    </div>
                    <div className="services">
                        <div className='icon5'><i class="fa-solid fa-book"></i></div>
                        <h4>Sample Paints</h4>
                    </div>
                    <div className="services">
                        <div className='icon6'><i class="fa-solid fa-brush"></i></div>
                        <h4>Wall Stickers</h4>
                    </div>
                </div>
            </section>

            <div className="project">
                <div className="project-top">
                    <h1>Our Projects</h1>
                    <div className='line'></div>
                    <h3>"Here's a list of our projects for your inspiration!"</h3>
                </div>
                <div className="project-down">
                    <div className="project-down-left">
                        <div className="project-down-left-top">
                            <div className="hide"><h4>Home & Villa Painting</h4></div>
                        </div>
                        <div className="project-down-left-down">
                            <div className="project-down-left-down1">
                                <div className="hide"><h4>Office Painting</h4></div>
                            </div>
                            <div className="project-down-left-down2">
                                <div className="hide"><h4>Farm House Painting</h4></div>
                            </div>
                        </div>
                    </div>
                    <div className="project-down-right">
                        <div className="hide"><h4>Light Fixtures</h4></div>
                    </div>
                </div>
            </div>

            <div className="news">
                <div className="news-top">
                    <h1>News</h1>
                    <div className='line'></div>
                </div>
                <div className="news-down">
                    <div className="blog">
                        <div className="blog-image1">
                            <img src={news1} alt="" className='img1' width={356} height={170} />
                        </div>
                        <a href="/News1"><h4>How to paint tiles and normal wooden walls.</h4>
                            <h5>Tiling is a great choice for areas subject to water, dirt, and humidity, but over time they can age poorly and replacing them is an expensive and time-consuming.....</h5>
                            <div><i class="fa-solid fa-arrow-right"></i>  Read More</div></a>
                    </div>
                    <div className="blog">
                        <div className="blog-image1">
                            <img src={news2} alt="" className='img1' width={356} height={170} />
                        </div>
                        <a href="/News2"><h4>How to paint interior walls and windows.</h4>
                            <h5>You need to start with a completely smooth surface if you want to paint walls, ceilings, and furniture with a flawless finish.....</h5>
                            <div><i class="fa-solid fa-arrow-right"></i>  Read More</div></a>
                    </div>
                    <div className="blog">
                        <div className="blog-image1">
                            <img src={news3} alt="" className='img1' width={356} height={170} />
                        </div>
                        <a href="/News3"><h4>Correct method to choose the right paint finish.</h4>
                            <h5>In today’s open-plan homes, where kitchens, living rooms, and dining rooms are often one large space, color is used to help define interiors and create focal points in relatively featureless rooms. The trick, of course, is figuring out how to pick paint colors to use and where to put them......</h5>
                            <div><i class="fa-solid fa-arrow-right"></i>  Read More</div></a>
                    </div>
                </div>
            </div>

            <section id="estimate">
                <div className="box">
                    <div className='free'><h3>Free Estimate</h3>
                        <h6>Please share your details below and we will get in touch with you soon.</h6>
                    </div>
                    <div className="name-email">
                        <input type="text" placeholder='Name' className='inp1' />
                        <input type="email" placeholder='Email' className='inp1' />
                    </div>
                    <div className="phone">
                        <input type="phone" placeholder='Phone number' className='inp2' />
                        <input type="text" placeholder='Message' className='inp3' />
                        <button className='send'>SEND</button>
                    </div>
                </div>
            </section>

            <div className="slide">

            </div>


            <div className="package">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={review3} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={review2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={review1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="number">
                <div className="color1"></div>
                <div className="color2">
                    <h1> GET FREE</h1>
                </div>
                <div className="color3">
                    <h1>ESTIMATE :</h1>
                </div>
                <div className="color4">
                    <h1>(+91) 0000</h1>
                </div>
                <div className="color5">
                    <h1>000000</h1>
                </div>
                <div className="color6"></div>
            </div>
            <section id="footer">
                <div className="footer1">
                    <div className="logo"><h3>LOGO</h3></div>
                    <div className="icons">
                        <div className="twitter"><a href=""><i class="fa-brands fa-twitter"></i></a></div>
                        <div className="facebook"><a href=""><i class="fa-brands fa-square-facebook"></i></a></div>
                        <div className="instagram"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                    </div>
                </div>
                <div className="footer2">
                    <p>Our Services</p>
                    <a href="">History</a>
                    <a href="">Sustainability</a>
                    <a href="">Trade Account</a>
                    <a href="">Stockists</a>
                    <a href="">Color Consultation</a>
                    <a href="">Paint Consultation</a>
                </div>
                <div className="footer3">
                    <p>Links</p>
                    <a href="">Paint Advise</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Order Tracking</a>
                    <a href="">Color Card</a>
                    <a href="">Our Inspiration</a>
                    <a href="">Cookies Settings</a>
                </div>
                <div className="footer4">
                    <div className='footer4-1'>Location</div>
                    <div className="footer4-2">
                        <div><i class="fa-solid fa-location-dot"></i></div>
                        <div><h5>Address</h5></div>
                    </div>
                    <div className="footer4-3">
                        <div><i class="fa-solid fa-message"></i></div>
                        <div><h5>0000000000</h5></div>
                    </div>
                    <div className="footer4-4">
                        <div><i class="fa-solid fa-envelope"></i></div>
                        <div><h5>info@email.com</h5></div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default New