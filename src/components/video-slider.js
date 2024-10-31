import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function VideoSlider() {
  const [videoItems, setVideoItems] = useState([]);

  const url = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clsx9i67q0mac07uneq5zcr5x/master';

  const query = `
    query videos {
      sliderDeVideos {
        id
        imagemDeCapaDoVideo {
          url
        }
        tituloDoVideo
        video {
          url
        }
      }
    }
  `;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        const data = await response.json();
        const videos = data.data.sliderDeVideos.map(video => ({
          img: video.imagemDeCapaDoVideo.url,
          videoUrl: video.video.url,
          title: video.tituloDoVideo,
        }));
        setVideoItems(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
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
              <video width="100%" controls>
                <source src={item.videoUrl} type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
              <p>{item.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
