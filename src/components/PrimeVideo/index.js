import MoviesSlider from '../MoviesSlider'
import './index.css'

const primeVedio = props => {
  const {moviesList} = props

  return (
    <div className="prime-container-main">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime vedio"
        className="prime-banner"
      />

      <div className="prime-vedio-container">
        <div>
          <h1>Action Movies</h1>
          <MoviesSlider
            data={moviesList.filter(item => item.categoryId === 'ACTION')}
          />
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <MoviesSlider
            data={moviesList.filter(item => item.categoryId === 'COMEDY')}
          />
        </div>
      </div>
    </div>
  )
}

export default primeVedio
