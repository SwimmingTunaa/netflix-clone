const rowSettings = {
    dots: true,
    arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 11,
        slidesToScroll:5,
        adaptiveHeight: true,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 9,
            slidesToScroll:5,
          }
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 6,
            slidesToScroll:5
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
            initialSlide: 0
          }
        }
      ]

    };
export default rowSettings;