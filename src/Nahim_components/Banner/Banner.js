import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ height: '100vh' }}
                        className="d-block w-100"
                        src="https://dreamweaver.com.bd/wp-content/uploads/2017/11/Couple-2.jpg"
                        alt="First slide"
                    />


                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '100vh' }}
                        className="d-block w-100"
                        src="https://photos.smugmug.com/Bangladeshi-Wedding-Photos/i-NzPRRHN/1/eded4037/M/_SSP4982-Exposure-M.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '100vh' }}
                        className="d-block w-100"
                        src="https://img3.evepla.com/864/050/1714434318640506.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;