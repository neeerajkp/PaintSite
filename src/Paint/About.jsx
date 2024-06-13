import React from 'react'
import styled from 'styled-components'
import news from '../Paint/news.jpg'
import aboutpic from '../Paint/aboutpic.png'
import bounce1 from '../Paint/bounce1.png'
import bounce2 from '../Paint/bounce2.png'
import bounce3 from '../Paint/bounce3.png'
import bounce4 from '../Paint/bounce4.png'
import bounce5 from '../Paint/bounce5.png'
const Container = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    .top{
        width: auto;
        height: 220px;
        background-image: url(${news});
        background-size: cover;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 40px;
        font-weight: bolder;
    }
    .content{
        margin-top: 40px;
        width: auto;
        height: 500px;
        display: flex;
        justify-content: space-evenly;
        /* background-color: aliceblue; */
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .image{
        width: 550px;
        height:450px;
    }
    h4{
        font-size: 20px;
        font-weight: bolder;
        margin-top: 20px;
    }
    .line1{
        width: 500px;
        height: 2px;
        background-image: linear-gradient(to right,purple,red);
    }
    .quote{
        margin-top: 30px;
        width: auto;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(to right,red,yellow);
        color: white;
    }
    .boxes{
        margin-top: 30px;
        width: auto;
        height: 500px;
        /* background-color: aliceblue; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .box1{
        width: 280px;
        height: 350px;
        background-image: linear-gradient(to bottom,orange,red);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
    }
    .box2{
        width: 280px;
        height: 350px;
        background-image: linear-gradient(to bottom,purple,pink);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;

    }
    .box3{
        width: 280px;
        height: 350px;
        background-image: linear-gradient(to bottom,pink,orange);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;

    }
    .box4{
        width: 280px;
        height: 350px;
        background-image: linear-gradient(to bottom,lightgreen,blue);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;

    }
    .icon{
        font-size: 50px;
        color: black;
    }

    .images{
        width: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 150px;
    }
    .slide1,.slide2,.slide3,.slide4,.slide5{
        width: 120px;
        height: 120px;
        animation: bouncing 1s ease-in-out infinite;
    }
    @keyframes bouncing {
        0%{
            transform: translateY(0px);
        }
        20%{
            transform: translateY(-15px);
        }
        100%{
            transform: translateY(0px);
        }
    }
    #footer{
        width: auto;
        height: 350px;
        /* background-color: gainsboro; */
        display: flex;
        justify-content: space-evenly;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    a{
        text-decoration: none;
        color: black;
        margin-top: 15px;
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
        margin-top: 15px;
    }
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 70px;
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
    h6{
        margin-left: 10px;
    }
    .home{
        margin-left: 10px;
    }
    .number{
        margin-top: 20px;
        width: 100%;
        height: 90px;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        background-image: linear-gradient(to right,violet,indigo,blue,green,yellow,orange,red);
        display: flex;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        /* background-color: aliceblue; */
    }
    


`

const About = () => {

    return (
        <Container>
            {/* <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/About'>About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/'>Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#reply">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/'>Gallery</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="top">
                <p>About Us.</p>
            </div>

            <div className="content">
                <div className="left">
                    <h4> Our high-quality premium quality paints and experience gives<br /> excellent coverage and durability. </h4>
                    <p>Better-quality paint simply covers better, which will require fewer brush strokes and<br /> coats, less time, and fewer supplies, which equates to less money spent.</p>
                    <p>A wall painted with a quality paint seems to be easier to wipe clean on a day-to-day<br /> basis, saving you time and sweat</p>
                    <div className="line1"></div>
                    <p>We see our customers as invited guests to a party, and we are the hosts. It’s our job<br /> every day to make every important aspect of the customer experience a little bit better.</p>
                    <div className="line1"></div>
                    <p><b>BUILD YOUR DREAM HOME AS YOUR CHOICE</b></p>
                    <p><b>WE ARE READY TO HELP YOU!</b></p>

                </div>
                <div className="right">
                    <img src={aboutpic} className='image' alt="" />
                </div>
            </div>

            <div className="quote">
                <h3>Would you like to make your dream home colorful? </h3>
            </div>

            <div className="boxes">
                <div className="box1">
                    <div className='icon'><i class="fa-regular fa-heart"></i></div>
                    <h5>50K</h5>
                    <h5>Satisfied Clients</h5>
                </div>
                <div className="box2">
                    <div className="icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <h5>10K</h5>
                    <h5>Successful Projects</h5>
                </div>
                <div className="box3">
                    <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
                    <h5>5</h5>
                    <h5>Stores</h5>
                </div>
                <div className="box4">
                    <div className="icon"><i class="fa-solid fa-people-group"></i></div>
                    <h5>250K</h5>
                    <h5>Expert Teams</h5>
                </div>
            </div>

            <div className="images">
                <div><img src={bounce1} className='slide1' alt="" /></div>
                <div><img src={bounce2} className='slide2' alt="" /></div>
                <div><img src={bounce3} className='slide3' alt="" /></div>
                <div><img src={bounce4} className='slide4' alt="" /></div>
                <div><img src={bounce5} className='slide5' alt="" /></div>
            </div>

            <div className="number">
                <h2>Get Free Estimate: 0000000000</h2>
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
                    <h5>Our Services</h5>
                    <a href="">Painting</a>
                    <a href="">Renewal</a>
                    <a href="">Color Consultation</a>
                    <a href="">Paint Consultation</a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
                <div className="footer4">
                    <div className='footer4-1'>Location</div>
                    <div className="footer4-2">
                        <div><i class="fa-solid fa-location-dot"></i></div>
                        <div><h6>Address</h6></div>
                    </div>
                    <div className="footer4-3">
                        <div><i class="fa-solid fa-message"></i></div>
                        <div><h6>0000000000</h6></div>
                    </div>
                    <div className="footer4-4">
                        <div><i class="fa-solid fa-envelope"></i></div>
                        <div><h6>info@email.com</h6></div>
                    </div>
                </div>
            </section>

        </Container>
    )
}

export default About