// // import React from 'react'
// // import AliceCarousel from 'react-alice-carousel';
// // import 'react-alice-carousel/lib/alice-carousel.css';
// // import { MainCarouselData } from './MainCarousel';
// // import "./MainCarousel.css";

// // const MainCarousel = () => {
// //     const items=MainCarouselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.image} alt='' />)

// //   return (
// //     <div>
// //       <AliceCarousel
// //       items={items}
// //       disableButtonsControls
// //       autoPlay
// //       autoPlayInterval={1000}
// //       infinite
// //       />
// //     </div>
// //   )
// // }

// // export default MainCarousel

// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { MainCarouselData } from "./MainCarousel.js";
// import "./MainCarousel.css";

// const MainCarousel = () => {
//   const items = MainCarouselData.map((item, index) => (
//     <img
//       key={index}

//       className="carousel-image cursor-pointer"
//       role="presentation"
//       src={item.image}
//       alt={`Slide ${index}`}
//     />
//   ));

//   return (
//     <div >
//     <div className=""></div>
//       <AliceCarousel
//         items={items}
//         disableButtonsControls

//         autoPlay
//         autoPlayInterval={1500}
//         infinite
//       />
//     </div>
//   );
// };

// export default MainCarousel;
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarousel.js";
import "./MainCarousel.css";

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      className="carousel-image cursor-pointer"
      role="presentation"
      src={item.image}
      alt={`Slide ${index}`}
    />
  ));

  return (
    <div className="carousel-container">
      <button className="carousel-button">Chat with YaanBuddy!</button>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
