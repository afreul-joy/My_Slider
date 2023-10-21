import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImg = () => {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };

  return (
    <div className="container">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="card mx-2 75 h-75">
          <img src="/src/assets/Bandarban.jpg" alt="" className="w-100" />
          <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card mx-2">
          <img src="/src/assets/sundr.jpg" alt="" className="w-100" />
          <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card mx-2">
          <img src="/src/assets/Dhaka.jpg" alt="" className="w-100" />
          <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <img src="/src/assets/ctg.jpg" alt="" className="w-100" />
          <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <img src="/src/assets/sreemon.jpg" alt="" className="w-100" />
          <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <img src="/src/assets/paharpur.jpg" alt="" className="w-100" />
          <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Slider>
    </div>
  );
};

export default SliderImg;
