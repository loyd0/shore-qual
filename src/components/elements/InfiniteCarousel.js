import Slider from "react-slick";
import React from 'react'
// import Img from 'gatsby-image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightChevron from '../../images/svgs/right-chevron';
import LeftChevron from '../../images/svgs/left-chevron';
import Testimonial from "../contentful-elements/Testimonial";


export default function InfiniteCarousel({ name, slides = [], images = [] }) {

    const settings = {
        className: "center",
        lazyLoad: true,
        centerMode: true,
        centerPadding: "250px",
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: false,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "120px",
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "50px",

                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerPadding: "0px",
                }
            }
        ]
    };

    return (
        <div id="infinite-slider"
            className={`relative`}>
            <Slider {...settings} className="overflow-x-hidden" >
                {slides && slides.map((slide, index) => 
                    <Testimonial key={slide.name + index} {...slide} />
                )}
            </Slider>
        </div>
    );
}

const RightArrow = (props) => <RightChevron {...props} className={`text-primary -mt-4 right-2 sm:right-12 md:right-24 lg:right-56 z-front absolute top-1/2`} />
const LeftArrow = (props) => <LeftChevron {...props} className={`text-primary -mt-4 left-2 sm:left-12 md:left-24 lg:left-56 z-front absolute top-1/2`} />

//  To add images back in
{/* {images && !slides && images.map(({ image, ...restOfImage}, index) =>
    <div key={image.title}>
        <figure
            style={{ display: "flex !important", maxWidth:450, minHeight: 400}}
            className={`${index !== currentSlideIndex ? "opacity-20  scale-90 " : "opacity-100 scale-100"} transform transition duration-200 max-w-xl mx-auto flex flex-col relative h-full justify-center`}>
            <Img className="w-full h-full mx-auto" fluid={image.fluid} alt={image.title} />
        </figure>
    </div>

)} */}

