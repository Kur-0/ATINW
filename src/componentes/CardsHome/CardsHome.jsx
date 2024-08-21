import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from '../../../artigos.json'

const CardsHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
  };


  return (
    <div className="mt-[53px]">
      <Slider {...settings}>
        {data.map((filme, index) => (
          <div key={index} className="p-4">
            <img src={filme.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsHome;