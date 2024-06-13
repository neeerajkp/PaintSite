import React from 'react'
import styled from 'styled-components'
import news from '../Paint/news.jpg'
import news3 from '../Paint/news3.png'
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
        height: 590px;
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
    h6{
        margin-left: 10px;
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
        align-items: center;
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
        margin-top: 80px;
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
                <p>Correct method to choose the right paint finish.</p>
            </div>

            <div className="pic">
                <img src={news3} alt="" width={1100} height={600} />
                <h2>Correct method to choose the right paint finish.</h2>
                <div className="one">
                    <p>In today’s open-plan homes, where kitchens, living rooms, and dining rooms are often one large space, color is used to help define interiors and create focal points in relatively featureless rooms. The trick, of course, is figuring out how to pick paint colors to use and where to put them.</p>
                    <div className='two'>
                        <p>1. Create a Color Scheme That Matches Your Home’s Furniture :</p>
                        <p>2. Decide on the Finish to Create an Appealing Visual Effect</p>
                        <p>3. Match The Color To The Feeling You Want In The Room </p>
                        <p>4. Know Your Whites</p>
                        <p>5. Create Flow in Open Plan Spaces </p>
                        <p>6. Make Small Spaces Feel Bigger or Cozier </p>
                        <p>7. Using Color Architecturally</p>
                        <p>8. Exploring Using Two Different Colors in The Same Room</p>
                        <p>9. Create Contrast in Rooms with Wainscoting </p>
                        <p>10. Create An Accent Wall to Add a Focal Point</p>
                        <p>11. Explore Bolder Options with Multiple Colors</p>
                        <p>12. Treat Your Ceiling Like a Fifth Wall</p>

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
                <h2>Get Free Estimate : 0000000000</h2>
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