import { useEffect } from "react";
import Slider from "react-slick";

export default function PlayersSlider() {
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
            <h2 className="heading">Jogadores</h2>
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
    img: "images/jerry.jpg",
    videoUrl: "https://media.graphassets.com/x420SlK7RhaErMjyILBT",
    title: "Jerry - ME",
  },
  {
    img: "images/silas.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Silas - AC",
  },
  {
    img: "images/img_adam.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Adam - DC",
  },
  {
    img: "images/gvena.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Venancio - DD",
  },
  {
    img: "images/ider.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Ider - MC",
  },
  {
    img: "images/momadejr.jpg",
    videoUrl: "https://vimeo.com/139714818",
    title: "Momade - DE",
  },
];
