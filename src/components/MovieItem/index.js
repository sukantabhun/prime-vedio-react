import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {itemData} = props
  const {thumbnailUrl, videoUrl} = itemData

  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="item-image trigger-button"
            onError={() =>
              console.error(`Failed to load image at ${thumbnailUrl}`)
            }
          />
        }
      >
        {close => (
          <div className="popup-container">
            <button
              className="close-icon"
              type="button"
              data-testid="closeButton"
              onClick={close}
            >
              <IoMdClose size={24} />
            </button>
            <div className="popup-content">
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="400px"
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
