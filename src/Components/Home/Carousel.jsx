// Carousel.js
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import CategoryCard from './CategoryCard';
// import './Carousel.css';

// const Carousel = ({ categories }) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <Slider {...settings}>
//             {categories.map((category, index) => (
//                 <CategoryCard key={index} category={category} />
//             ))}
//         </Slider>
//     );
// };

// export default Carousel;
