import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderContainerStyle = {
  maxWidth: '100vw',
  margin: '0 auto',
}

const MoviesSlider = props => {
  const {data} = props

  const settings = {
    slidesToShow: 4,
    infinite: true, // Enables looping
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    centerMode: false,
    centerPadding: '0px',
  }

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        {data.map(item => (
          <MovieItem itemData={item} key={item.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
