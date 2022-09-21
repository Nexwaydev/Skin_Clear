import React from 'react';
import product1 from '../Images/product1.jpg';
import product2 from '../Images/product2.jpg';
import product3 from '../Images/product3.jpg';
import Star from './Star';
import Slider from 'react-slick';




const Products = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,

  }


return(
  <div className='container all'>
    <div className='row mx-2'>
      <div className='col-md-2'></div>
      <div className='col-md-8'>
      <Slider {...settings}>
      <div className='slider'>
      <Star/>
        <img src={product1} className='img-fluid' alt='image4'/>
        <p>Buy Now</p>
      </div>
      <div className='slider'>
      <Star/>
      <img src={product2} className='img-fluid' alt='image3'/>
      <p>Buy Now</p>
      </div>
      <div className='slider'>
      <Star/>
      <img src={product3} className='img-fluid' alt='image2'/>
      <p>Buy Now</p>
      </div>
      
    </Slider>
      </div>
      <div className='col-md-2'></div>
    </div>
    </div>
  )
}

export default Products