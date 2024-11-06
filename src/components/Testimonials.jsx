import React, { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';

// Small img
import testi1 from "../assets/testimonials/consulven.jpg";
import testi2 from '../assets/testimonials/EEB Engineering.jpg';
import testi3 from '../assets/testimonials/fp.jpg';
import testi4 from '../assets/testimonials/Nexus.jpg';
import testi5 from '../assets/testimonials/Pc.jpg';
import testi6 from '../assets/testimonials/Synergist.jpg';

// inside lg images
import testiL1 from "../assets/testimonials/consulven-lg.jpg";
import testiL2 from "../assets/testimonials/EEBlg.jpg";
import testiL3 from "../assets/testimonials/fplg.jpg";
import testiL4 from "../assets/testimonials/Nexuslg.jpg";
import testiL5 from "../assets/testimonials/Pclg.jpg";
import testiL6 from "../assets/testimonials/Synlg.jpg";

const Testimonials = () => {
    const [openImageIndex, setOpenImageIndex] = useState(null);

    const handleClickOutside = (event) => {
        if (!event.target.closest('.testi-img')) {
            setOpenImageIndex(null);
        }
    };

    const toggleImage = (index) => {
        if (openImageIndex === index) {
            setOpenImageIndex(null);
        } else {
            setOpenImageIndex(index);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const images = [testi1, testi2, testi3, testi4, testi5, testi6]; // Small images
    const images1 = [testiL1, testiL2, testiL3, testiL4, testiL5, testiL6]; //large img

    return (
        <Container fluid>
            <div className='Testimonials'>
                <div className="headings text-center">
                    <h1 className='title'>Testimonials</h1>
                </div>
                <div className="testimonial-wrapper">
                    <div className="testimonial-parent">
                    {images.map((imageSrc, index) => (
                        <div key={index} className="testi-img" onClick={() => toggleImage(index)}>
                            <img
                                src={imageSrc}
                                alt={`Testimonial ${index + 1}`}
                                className={openImageIndex === index ? 'open' : ''}
                            />
                            {openImageIndex === index && (
                                <div className="overlay">
                                    <img src={images1[index]} alt={`Opened Testimonial ${index + 1}`} />
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="testimonials-mv-container">
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src="https://i.ibb.co/8x9xK4H/team.jpg"
                                className="img-circle img-responsive"
                                alt="Client 1"
                            />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                            <h4>Client 1</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src="https://i.ibb.co/8x9xK4H/team.jpg"
                                className="img-circle img-responsive"
                                alt="Client 2"
                            />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                            <h4>Client 2</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src="https://i.ibb.co/8x9xK4H/team.jpg"
                                className="img-circle img-responsive"
                                alt="Client 3"
                            />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                            <h4>Client 3</h4>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
}

export default Testimonials;
