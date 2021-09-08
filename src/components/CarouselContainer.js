import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function CarouselContainer() {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
<div interval={2000}>
    <img  className="d-block w-100"  style={{width:"100%", height:"600px"}} src="img1.jpg" alt="truck"/>  
</div>

<div>
    <img  className="d-block w-100" style={{width:"100%", height:"600px"}} src="img2.jpg"  alt="truck"/>
</div>


<div>
    <img  className="d-block w-100" style={{width:"100%", height:"600px"}} src="img3.jpg" alt="truck" />
</div>

<div>
    <img  className="d-block w-100" style={{width:"100%", height:"600px"}} src="img4.jpg"  alt="truck"/>
</div>

<div>
    <img  className="d-block w-100" style={{width:"100%", height:"600px"}} src="img5.jpg" alt="truck" />
</div>

</Carousel>
  )
}

export default CarouselContainer;