import { useEffect } from "react";
import Slider from "react-slick";

export default function VideoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-next`} onClick={onClick}>
        <span className="icon-keyboard_arrow_right"></span>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-prev`} onClick={onClick}>
        <span className="icon-keyboard_arrow_left"></span>
      </div>
    );
  }

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-6 title-section">
            <h2 className="heading">Videos</h2>
          </div>
          <div className="col-6 text-right">
            <div className="custom-nav">
              <span></span>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {videoItems.map((item, index) => (
            <div className="item" key={index}>
              <div className="video-media">
                <img src={item.img} alt="Image" className="img-fluid" />
                <a
                  href={item.videoUrl}
                  className="d-flex play-button align-items-center"
                  data-fancybox
                >
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">{item.title}</h3>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const videoItems = [
  {
    img: "images/img_1.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Dogba set for Juvendu return?",
  },
  {
    img: "images/img_2.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Kai Nets Double To Secure Comfortable Away Win",
  },
  {
    img: "images/img_adam.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Romolu to stay at Real Nadrid?",
  },
  {
    img: "images/img_1.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Dogba set for Juvendu return?",
  },
  {
    img: "images/img_2.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Kai Nets Double To Secure Comfortable Away Win",
  },
  {
    img: "images/img_3.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Romolu to stay at Real Nadrid?",
  },
];
