import React from 'react'
import styled from 'styled-components'
import news from '../Paint/news.jpg'
import news1 from '../Paint/news1.png'
const Container = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    .top{
        width: 100%;
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
    .pic{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    h2{
        margin-top: 10px;
        font-weight: bolder;
    }
    .one{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        width: 800px;
        height: 640px;
        background-color: azure;
        align-items: center;
    }
    .two{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .three{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .twitter,.facebook,.instagram{
        margin-left: 10px;
    }
    #reply{
        border-radius: 15px;
        margin-top: 20px;
        width: 700px;
        height: 400px;
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .name-email{
        display: flex;
        justify-content: space-around;
    }
    .input1{
        width: 300px;
        height: 60px;
        margin-left: 30px;
        margin-top: 20px;
        outline: none;
        border: none;
    }
    .input2{
        width: 630px;
        height: 100px;
        margin-left: 30px;
        margin-top: 30px;
        outline: none;
        border: none;
    }
    .butt{
        margin-left: 30px;
        margin-top: 30px;
        width: 200px;
        height: 70px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right,skyblue,blue);
        border-radius: 20px;
        color: white;
    }
    h3{
        margin-top: 20px;
        margin-left: 30px;
    }
    h6{
        margin-left:20px;
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
    
    #footer{
        width: 100%;
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
        margin-top: 10px;
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
    .footer4{
        width: 330px;
        height: 350px;
        display: flex;
        flex-direction: column;  
        /* background-color: blueviolet; */
    }
    .footer4-1{
        font-size:25px;
        margin-top: 42px;
        margin-left: 100px;
    }
    .footer4-2,.footer4-3,.footer4-4{
        display: flex;
        margin-top: 30px;
        margin-left: 80px;
    }

`

const News1 = () => {
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
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="#reply">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/About'>About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="top">
                <p>How to paint tiles and normal wooden walls.</p>
            </div>

            <div className="pic">
                <img src={news1} alt="" width={1100} height={600} />
                <h2>How to paint tiles and normal wooden walls.</h2>
                <div className="one">
                    <p>There are many types of interior tile made from an array of materials. For this reason, manufacturers can be vague on which tiles their products can be used on, and we can’t guarantee that our recommendations are suited to your tiles. If you’re unsure, it is recommended to perform a patch test in a small, inconspicuous area to check adhesion, colour and compatibility before fully applying.</p>
                    <div className='two'>
                        <p>Step 1 – Surface Preparation</p>
                        <p>First, remove any signs of organic growth and treat affected areas with Zinsser Mould Killer & Remover. Allow to dry and rinse with hot water and liquid detergent. Change the water frequently, then degrease with methylated spirit.</p>
                        <p> Make sure that all dust is removed, and grout is completely dry before applying the paint.</p>
                        <p>Apply masking tape to edges, trims, and anywhere else you don’t want to paint. If there is sealant along any edges, this can be removed and resealed later, or covered with masking tape.</p>
                        <p>Step 2 – Priming</p>
                        <p>Prime the area with Zinsser Bullseye 1-2-3 Primer Sealer, which is particularly effective at promoting adhesion on hard-to-stick surfaces such as tile. It also seals stains, resists mould and mildew, and is ready to recoat in just 1 hour.</p>
                        <p>Step 3 – Painting</p>
                        <p>Zinsser Perma-White Interior is ideally suited for areas with persistent humidity and poor air circulation, such as bathrooms, basements, laundry rooms and kitchens. Available in more than 4,000+ colours from RAL, NCS, and British Standard ranges, you can get creative with whatever colour you like, or you could even use stencils to create a completely unique look you won’t find anywhere else.</p>
                    </div>
                </div>
                <div className="three">
                    <div>Share with Us :</div>
                    <div className="twitter"><a href=""><i class="fa-brands fa-twitter"></i></a></div>
                    <div className="facebook"><a href=""><i class="fa-brands fa-square-facebook"></i></a></div>
                    <div className="instagram"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                </div>
                <section id="reply">
                    <h3>Leave a Reply</h3>
                    <div className='name-email'>
                        <div><input type="text" placeholder='Name' className='input1' /></div>
                        <div><input type="email" placeholder='Email' className='input1' /></div>
                    </div>
                    <div><input type="text" placeholder='Your Message' className='input2' /></div>
                    <button className='butt'>SEND</button>
                </section>
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
                    <h4>Our Services</h4>
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
                    <div className='footer4-1'><h5>Location</h5></div>
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

export default News1