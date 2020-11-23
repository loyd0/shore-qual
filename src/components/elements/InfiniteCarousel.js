import Slider from "react-slick";
import React from 'react'
import Img from 'gatsby-image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from './Image';
import RightChevron from '../../images/svgs/right-chevron';
import LeftChevron from '../../images/svgs/left-chevron';


export default function InfiniteCarousel({ name, slides = [], images = [] }) {


    // const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

    const settings = {
        className: "center",
        lazyLoad: true,
        centerMode: true,
        centerPadding: "250px",
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: false,
        // beforeChange: (oldIndex, newIndex) => beforeChange(oldIndex, newIndex),
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
    // const beforeChange = (oldIndex, newIndex) => {
    //     return setCurrentSlideIndex(newIndex)
    // }


    return (
        <div id="infinite-slider"
            className={`relative`}>
            <Slider {...settings} className="" >
                {slides && slides.map((slide, index) => <div className="px-6 lg:px-12 ">
                    <div className="bg-white lg:grid lg:grid-cols-5 py-4 px-6 lg:py-8 lg:pr-4 rounded max-w-4xl mx-auto">
                        <div className="flex flex-row lg:flex-col w-full justify-center lg:col-span-2 items-center mb-4 lg:mb-0 ">
                        <Image className="mx-auto rounded-full w-40 h-40 self-center lg:w-56 lg:h-56" image={slide.image} alt={slide.image.title} />
                        </div>
                        <div className="flex flex-col col-span-3 pr-6 text-justify space-y-3">
                            <p className=" leading-normal lg:leading-loose">{slide.quote.text}</p>
                            <h5 className="font-bold">{slide.name}</h5>
                        </div>
                    </div>
                </div>
                )}
            </Slider>
        </div>
    );
}

const RightArrow = (props) =>  <RightChevron {...props} className={`text-primary -mt-4 right-8 sm:right-12 md:right-24 lg:right-56 z-front absolute top-1/2`} />
const LeftArrow = (props) => <LeftChevron {...props} className={`text-primary -mt-4 left-8 sm:left-12 md:left-24 lg:left-56 z-front absolute top-1/2`} />

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

