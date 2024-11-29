import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const filterItem = categoryId =>
    moviesList.filter(item => item.categoryId === categoryId)

  return (
    <div className="prime-container-main">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-banner"
      />

      <div className="prime-video-container">
        <div>
          <h1>Action Movies</h1>
          <MoviesSlider data={filterItem('ACTION')} />
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <MoviesSlider data={filterItem('COMEDY')} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
