import Slider from 'react-slick'
import MovieItem from '../MovieItem'


const MoviesSlider = props => {
  const {data} = props
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div>
      <Slider {...settings}>
        {data.map(item => (
          <MovieItem itemData={item} key={item.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
