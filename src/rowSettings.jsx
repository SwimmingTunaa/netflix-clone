const arrowStyle = {
  height: '100%',
  transform: 'translateX(20px)'
}

function SampleNextArrow(props)
{
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, arrowStyle }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,arrowStyle}}
      onClick={onClick}
    />
  );
}

const rowSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 18,
  slidesToScroll:5,
  adaptiveHeight: true,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow/>,
  responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 11,
        slidesToScroll: 5,
        initialSlide: 1
      }
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 5,
        initialSlide: 1
        
      }
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 5,
        initialSlide: 1

      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 1
        
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 1
      }
    },
      {
      breakpoint: 680,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1
      }
      },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1
      }
    }
  ]

    };
export default rowSettings;