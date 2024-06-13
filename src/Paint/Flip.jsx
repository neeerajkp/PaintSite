import React from 'react'
import html2pdf from 'html2pdf.js'
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .card{
        height: 70%;
        width: 50%;
        position: relative;
        transition: transform 1500ms;
        transform-style: preserve-3d;
        
    }
    .front-side,.back-side{
        height: 100%;
        width: 100%;
        border-radius:20px;
        box-shadow: 0 0 5px 2px black;
        position: absolute;
        backface-visibility: hidden;
        background-color: grey;

    }
    .back-side{
        background-color: black;
        transform: rotateY(180deg);
        color: white;
    }
    .card:hover{
        cursor: pointer;
        transform: rotateY(180deg);
    }

`

const flip = () => {
    const header = `<div style="text-align: center;"> URBANHUB INNOVATIONS</div>`

    const downloadPdf = () => {
        const element = document.getElementById('card');
        html2pdf(element, {
            margin: 10,
            filename: 'my_document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' },
            header: [{ content: header }],
        });
    };

    return (
        <Container>
            <div className="card">
                <div className="front-side"></div>
                <div className="back-side">
                    <h1>Back of the card</h1>
                    <p>Flip card Animation</p>
                </div>
                <button onClick={downloadPdf}>Download</button>
            </div>
        </Container>
    )
}

export default flip